// Copyright (C) 2019-2022 Aleo Systems Inc.
// This file is part of the snarkVM library.

// The snarkVM library is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// The snarkVM library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with the snarkVM library. If not, see <https://www.gnu.org/licenses/>.

use super::*;
use console::{account::*, network::Testnet3};
use snarkvm_utilities::Uniform;

use rand::RngCore;

#[test]
fn test_coinbase_puzzle() {
    let max_degree = 1 << 15;
    let mut rng = rand::thread_rng();

    let srs = CoinbasePuzzle::<Testnet3>::setup(max_degree, &mut rng).unwrap();
    for log_degree in 5..10 {
        let degree = (1 << log_degree) - 1;
        let product_degree = (1 << (log_degree + 1)) - 1;
        let (pk, vk) = CoinbasePuzzle::<Testnet3>::trim(&srs, product_degree).unwrap();
        let epoch_info = EpochInfo { epoch_number: rng.next_u64() };
        let epoch_challenge = CoinbasePuzzle::init_for_epoch(&epoch_info, degree).unwrap();
        for batch_size in 1..10 {
            let solutions = (0..batch_size)
                .map(|_| {
                    let private_key = PrivateKey::<Testnet3>::new(&mut rng).unwrap();
                    let address = Address::try_from(private_key).unwrap();
                    let nonce = u64::rand(&mut rng);
                    CoinbasePuzzle::prove(&pk, &epoch_info, &epoch_challenge, &address, nonce).unwrap()
                })
                .collect::<Vec<_>>();
            let full_solution = CoinbasePuzzle::accumulate(&pk, &epoch_info, &epoch_challenge, &solutions).unwrap();
            assert!(CoinbasePuzzle::verify(&vk, &epoch_info, &epoch_challenge, &full_solution).unwrap());
            let bad_epoch_info = EpochInfo { epoch_number: rng.next_u64() };
            let bad_epoch_challenge = CoinbasePuzzle::init_for_epoch(&bad_epoch_info, degree).unwrap();
            assert!(!CoinbasePuzzle::verify(&vk, &bad_epoch_info, &bad_epoch_challenge, &full_solution).unwrap());
        }
    }
}
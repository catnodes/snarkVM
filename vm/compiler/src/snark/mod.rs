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

use console::network::prelude::*;
use snarkvm_algorithms::{crypto_hash::PoseidonSponge, snark::marlin, SNARK};
use snarkvm_curves::{bls12_377::Bls12_377, PairingEngine};

use core::marker::PhantomData;

type Fq = <Bls12_377 as PairingEngine>::Fq;
type Fr = <Bls12_377 as PairingEngine>::Fr;

// TODO (howardwu): Replace me.
type FS = marlin::fiat_shamir::FiatShamirAlgebraicSpongeRng<Fr, Fq, PoseidonSponge<Fq, 6, 1>>;
type Marlin = marlin::MarlinSNARK<Bls12_377, FS, marlin::MarlinHidingMode, [Fr]>;

mod proof;
pub use proof::Proof;

mod proving_key;
pub use proving_key::ProvingKey;

mod universal_srs;
pub use universal_srs::UniversalSRS;

mod verifying_key;
pub use verifying_key::VerifyingKey;

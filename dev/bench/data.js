window.BENCHMARK_DATA = {
  "lastUpdate": 1685640970071,
  "repoUrl": "https://github.com/catnodes/snarkVM",
  "entries": {
    "snarkVM Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "14917648+raychu86@users.noreply.github.com",
            "name": "raychu86",
            "username": "raychu86"
          },
          "committer": {
            "email": "14917648+raychu86@users.noreply.github.com",
            "name": "raychu86",
            "username": "raychu86"
          },
          "distinct": true,
          "id": "d896844c8b4b6aaa9872814771c25866c242fe5d",
          "message": "Fix synthesizer benches",
          "timestamp": "2023-05-30T18:22:16-07:00",
          "tree_id": "862a8fbc1b98cb5c205a5fcbe954193214bc5cd1",
          "url": "https://github.com/catnodes/snarkVM/commit/d896844c8b4b6aaa9872814771c25866c242fe5d"
        },
        "date": 1685525489771,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 104018851,
            "range": "± 186387",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 704993083,
            "range": "± 1951465",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1302159203,
            "range": "± 31022122",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2000940254,
            "range": "± 2513894",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2530844625,
            "range": "± 13525743",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2804490128,
            "range": "± 13155239",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5171937780,
            "range": "± 7488914",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9283686818,
            "range": "± 9812557",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 70377478,
            "range": "± 47806",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 498226015,
            "range": "± 3187153",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4318114785,
            "range": "± 44715247",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 91221,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 228105,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1633035083,
            "range": "± 3175096",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 98317166,
            "range": "± 550856",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 612550563,
            "range": "± 3716942",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 10122178726,
            "range": "± 13491999",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 7553,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 8232,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 29486211,
            "range": "± 903462",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 13822761,
            "range": "± 7302",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 21801639,
            "range": "± 454486",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5919746,
            "range": "± 5546",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7186401,
            "range": "± 30235",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 19018401,
            "range": "± 32951",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 157445341,
            "range": "± 792479",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 943285200,
            "range": "± 2933531",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7386006,
            "range": "± 34444",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9047774,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 32112589,
            "range": "± 901582",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 230763473,
            "range": "± 3591489",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 8009924,
            "range": "± 157873",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 353450,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 713173180,
            "range": "± 1445416",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 97484,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 192204,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 247111,
            "range": "± 5571",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 70079,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 70058,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 140751,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 164081,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 211044,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 79085,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 79020,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 158455,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 158400,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 198123,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 172843,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 172792,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 260142,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 260135,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 260134,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3931727,
            "range": "± 4043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5956066,
            "range": "± 2344",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 25893436,
            "range": "± 155644",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 118575767,
            "range": "± 2297945",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1399432728,
            "range": "± 4485950",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11876795603,
            "range": "± 8722759",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3826471,
            "range": "± 2587",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5851283,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 25785866,
            "range": "± 10965",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 118044655,
            "range": "± 2612585",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1404649899,
            "range": "± 7688507",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 11932121250,
            "range": "± 43361367",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3822406,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6644808,
            "range": "± 4557",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 24886644,
            "range": "± 476443",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 118147400,
            "range": "± 1989613",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1395939360,
            "range": "± 5564951",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 11927491894,
            "range": "± 21734395",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3822870,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5375137,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 29057301,
            "range": "± 15354",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 167044004,
            "range": "± 1226076",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1391254893,
            "range": "± 5108141",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11933813939,
            "range": "± 16954690",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3829094,
            "range": "± 2905",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5500315,
            "range": "± 4909",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 79861133,
            "range": "± 460296",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 120695990,
            "range": "± 1834448",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1342700280,
            "range": "± 6160900",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 11901305758,
            "range": "± 30280997",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4024662,
            "range": "± 11575",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5570604,
            "range": "± 15518",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 23243932,
            "range": "± 30190",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 119072958,
            "range": "± 1646750",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1776634747,
            "range": "± 4883881",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11370432783,
            "range": "± 20734174",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5819087,
            "range": "± 401660",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7587630,
            "range": "± 635780",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 26416621,
            "range": "± 652666",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 118584469,
            "range": "± 819462",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1038379089,
            "range": "± 6182497",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13796397574,
            "range": "± 24015998",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3823689,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 38636803,
            "range": "± 9191",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 386363564,
            "range": "± 53548",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3863654425,
            "range": "± 286174",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38656611115,
            "range": "± 11913931",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3818251,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 38610861,
            "range": "± 5383",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 386144704,
            "range": "± 33362",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3860662833,
            "range": "± 301336",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38625477526,
            "range": "± 9964971",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3820450,
            "range": "± 3130",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 38631731,
            "range": "± 10166",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 386400923,
            "range": "± 38770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3865182170,
            "range": "± 296817",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 38645962848,
            "range": "± 8521729",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3826465,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 38672061,
            "range": "± 9510",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 386755700,
            "range": "± 75184",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3868797594,
            "range": "± 256669",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 38693885152,
            "range": "± 9118079",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3971492,
            "range": "± 8231",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 40020655,
            "range": "± 26948",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 400041309,
            "range": "± 131415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4000100713,
            "range": "± 1059500",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 40006117972,
            "range": "± 11724319",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5266998,
            "range": "± 150709",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 48065378,
            "range": "± 145104",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 481757008,
            "range": "± 862185",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4828990905,
            "range": "± 15302282",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 48356353364,
            "range": "± 127815260",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3800896,
            "range": "± 3704",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3803072,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3800494,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3802951,
            "range": "± 2215",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3799996,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3805072,
            "range": "± 2406",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5349661,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5351033,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5349444,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5347556,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3798001,
            "range": "± 2659",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5583426,
            "range": "± 4565",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 22906265,
            "range": "± 10300",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 22902159,
            "range": "± 7553",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 22894988,
            "range": "± 7451",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3802853,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5584065,
            "range": "± 3050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 22902771,
            "range": "± 4763",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 119800555,
            "range": "± 1766783",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 119736666,
            "range": "± 2017046",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3842785,
            "range": "± 5678",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5515404,
            "range": "± 6029",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 25082496,
            "range": "± 46387",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 131565620,
            "range": "± 1750538",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8634",
            "value": 1009116405,
            "range": "± 9365242",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3941469,
            "range": "± 40068",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7638586,
            "range": "± 33617",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 45340033,
            "range": "± 128305",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 247549414,
            "range": "± 1242304",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2296754312,
            "range": "± 4700024",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3800396,
            "range": "± 2905",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3801417,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3806284,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3804010,
            "range": "± 15517",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3801699,
            "range": "± 2868",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3804143,
            "range": "± 2604",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3802052,
            "range": "± 2540",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3803297,
            "range": "± 3275",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3804826,
            "range": "± 6112",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3802102,
            "range": "± 3140",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3803102,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3805060,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3804569,
            "range": "± 2352",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3807013,
            "range": "± 4328",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3805257,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3804361,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3801885,
            "range": "± 2887",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3804799,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3806422,
            "range": "± 2616",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3805306,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3816205,
            "range": "± 4626",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3808281,
            "range": "± 2760",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3826913,
            "range": "± 3061",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3803727,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3872265,
            "range": "± 2420",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3812278,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3961162,
            "range": "± 8856",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3808710,
            "range": "± 6163",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4101287,
            "range": "± 19290",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3808940,
            "range": "± 4934",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4410714,
            "range": "± 63485",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3818976,
            "range": "± 19727",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 187240,
            "range": "± 4763",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 198503,
            "range": "± 2942",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1064,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 744,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 460,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 87135,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1767525,
            "range": "± 15047",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 474007,
            "range": "± 4735",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4159,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2926,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1800,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_sub_noborrow",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_num_bits",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 12684,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 79037,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6172,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4502,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 23304,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 237,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12666,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 125005,
            "range": "± 7719",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_num_bits",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sub_assign",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_double",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_square",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6376,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 33776,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 38,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 580106,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1154692,
            "range": "± 1529",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1990978,
            "range": "± 8243",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 31442,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 64474,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 218901,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 22998169,
            "range": "± 11374",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 22479949,
            "range": "± 31887",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 23253148,
            "range": "± 10689",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 346,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 717,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2390,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 228,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 359,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 14939,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 31513,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 63106,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 206564,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 19465529,
            "range": "± 16704",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 19379298,
            "range": "± 165191",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 20009461,
            "range": "± 25998",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 8400,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 16680,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 46514,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4856349,
            "range": "± 6611",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4856710,
            "range": "± 7960",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 5041162,
            "range": "± 31088",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 7722,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 15740,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 43148,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 4043366,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 4048914,
            "range": "± 46965",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 4180305,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 65097892675,
            "range": "± 114186870",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 431278277,
            "range": "± 2182017",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 43493049432,
            "range": "± 122483997",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - execution (transfer)",
            "value": 55928450,
            "range": "± 241207",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8361833668,
            "range": "± 18640112",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 314708047,
            "range": "± 916843",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 278597769,
            "range": "± 1004717",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1398211484,
            "range": "± 6374264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "committer": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "distinct": true,
          "id": "8e406fc29fdbebbbee2008678177892bb5ad9922",
          "message": "chore(snarkvm): bump version for new release",
          "timestamp": "2023-05-31T14:50:27-07:00",
          "tree_id": "bd9a895ae1fd325b702051b041ccab8aa0cc153d",
          "url": "https://github.com/catnodes/snarkVM/commit/8e406fc29fdbebbbee2008678177892bb5ad9922"
        },
        "date": 1685637882769,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 91322658,
            "range": "± 5535647",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 638598775,
            "range": "± 1198364",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1182649054,
            "range": "± 29068481",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1809964271,
            "range": "± 7324647",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2299641534,
            "range": "± 8020062",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2577212050,
            "range": "± 10498006",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4726644216,
            "range": "± 7999137",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8472372394,
            "range": "± 7952956",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 59842436,
            "range": "± 136307",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 441993893,
            "range": "± 1447579",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4000902792,
            "range": "± 43806043",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 80168,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 199477,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1455549424,
            "range": "± 4910506",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 85709890,
            "range": "± 1125377",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 528974649,
            "range": "± 5103626",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8704166392,
            "range": "± 35994833",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 6852,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 6998,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 25878800,
            "range": "± 1052041",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 11898736,
            "range": "± 5161",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 18403633,
            "range": "± 634023",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5082089,
            "range": "± 1779",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6318610,
            "range": "± 51748",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16694333,
            "range": "± 63778",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 138068113,
            "range": "± 591404",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 845904172,
            "range": "± 4066195",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6572204,
            "range": "± 46140",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8082717,
            "range": "± 27115",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 30571696,
            "range": "± 1128822",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 227006505,
            "range": "± 3942607",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 6935785,
            "range": "± 9393",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 340587,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 848706344,
            "range": "± 2994327",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 89256,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 172857,
            "range": "± 4102",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 222057,
            "range": "± 3994",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 63771,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 63786,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 127605,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 148792,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 191180,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 75609,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 75443,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 150994,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 150961,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 188985,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 168656,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 168670,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 253831,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 253847,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 253878,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3450668,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5203972,
            "range": "± 2740",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 22450457,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 104550147,
            "range": "± 2408146",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1218451431,
            "range": "± 6056172",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 10343331953,
            "range": "± 22149054",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3341209,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5099424,
            "range": "± 1777",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 22341216,
            "range": "± 16796",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 102770336,
            "range": "± 2053952",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1211924422,
            "range": "± 5649952",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 10330250921,
            "range": "± 21368071",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3342660,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5783007,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21563270,
            "range": "± 3764",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 102806639,
            "range": "± 2854310",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1212896532,
            "range": "± 6041985",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10342714841,
            "range": "± 20138548",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3343647,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4690790,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 25217356,
            "range": "± 3896",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 151919875,
            "range": "± 2593970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1212985097,
            "range": "± 5871464",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 10354177944,
            "range": "± 28358141",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3346712,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4799434,
            "range": "± 2817",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 72719241,
            "range": "± 1081972",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 105625626,
            "range": "± 2579365",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1163180747,
            "range": "± 5628465",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 10263829127,
            "range": "± 15916074",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3529113,
            "range": "± 5551",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4899883,
            "range": "± 12512",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 20151884,
            "range": "± 37052",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 103889339,
            "range": "± 2650535",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1533895139,
            "range": "± 7259125",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9829220704,
            "range": "± 17654368",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5715866,
            "range": "± 598109",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7384309,
            "range": "± 706792",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 24274175,
            "range": "± 803086",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 109271311,
            "range": "± 2437249",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 894059713,
            "range": "± 2809176",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11933386497,
            "range": "± 25285578",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3339047,
            "range": "± 1468",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 33255105,
            "range": "± 11670",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 334044118,
            "range": "± 37989",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3340351714,
            "range": "± 253292",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 33400079240,
            "range": "± 50481661",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3340858,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 33400545,
            "range": "± 7309",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 334108040,
            "range": "± 47590",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3340489878,
            "range": "± 140381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 33425139088,
            "range": "± 5612103",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3340743,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 33468773,
            "range": "± 25327",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 334070696,
            "range": "± 64612",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3340662348,
            "range": "± 138510",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 33414341789,
            "range": "± 4833147",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3346656,
            "range": "± 1376",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 33423425,
            "range": "± 17903",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 334558639,
            "range": "± 57529",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3343601187,
            "range": "± 280218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 33417073454,
            "range": "± 77952763",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3498015,
            "range": "± 10999",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 34815657,
            "range": "± 51975",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 347462454,
            "range": "± 310286",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3477284652,
            "range": "± 5534863",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 34599999991,
            "range": "± 79118563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5040753,
            "range": "± 145466",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 44460684,
            "range": "± 1332248",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 432693384,
            "range": "± 2979677",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4367298103,
            "range": "± 38618149",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 43675403073,
            "range": "± 273954153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3326750,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3327730,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3328117,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3327277,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3328243,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3321262,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4671518,
            "range": "± 1807",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4672325,
            "range": "± 2066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4671505,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4671182,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3319640,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4874253,
            "range": "± 1765",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 19828589,
            "range": "± 42330",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 19834166,
            "range": "± 36975",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 19828331,
            "range": "± 35133",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3323786,
            "range": "± 1604",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4873225,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 19807753,
            "range": "± 33908",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 105731517,
            "range": "± 2167020",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 105006119,
            "range": "± 2148767",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3350357,
            "range": "± 3560",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5017437,
            "range": "± 3937",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 21297070,
            "range": "± 53333",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 114403363,
            "range": "± 1615756",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8600",
            "value": 868662424,
            "range": "± 3472341",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3462610,
            "range": "± 37953",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7281759,
            "range": "± 42445",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 38277084,
            "range": "± 120239",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 212380174,
            "range": "± 2500544",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1955345459,
            "range": "± 9424022",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3324498,
            "range": "± 1234",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3325206,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3326027,
            "range": "± 1185",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3324519,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3322500,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3323401,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3326554,
            "range": "± 1053",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3325016,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3323851,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3323750,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3319203,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3321164,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3322261,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3320992,
            "range": "± 1173",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3324607,
            "range": "± 2101",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3323084,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3328147,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3324268,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3329028,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3324830,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3338459,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3324367,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3350981,
            "range": "± 5033",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3325600,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3392645,
            "range": "± 3441",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3327039,
            "range": "± 1185",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3473426,
            "range": "± 6974",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3327788,
            "range": "± 5972",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3655472,
            "range": "± 20830",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3335899,
            "range": "± 8968",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4056934,
            "range": "± 65936",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3347323,
            "range": "± 21517",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 159316,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 174676,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 943,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 682,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 439,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 74711,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1520898,
            "range": "± 6369",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 415052,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3593,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2558,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1615,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_sub_noborrow",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_num_bits",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10853,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 67348,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 216,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5375,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3720,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 20711,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 216,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 171,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11746,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 112461,
            "range": "± 6803",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_num_bits",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sub_assign",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_double",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_square",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5680,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 28215,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 494336,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 993342,
            "range": "± 3280",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1729870,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 28396,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 59075,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 210394,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 19644627,
            "range": "± 47081",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 19652526,
            "range": "± 64205",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 20268227,
            "range": "± 69178",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 771,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 196,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 317,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 14115,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 27580,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 55840,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 202473,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 16904894,
            "range": "± 27402",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 16944880,
            "range": "± 28945",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 17475058,
            "range": "± 25476",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7020,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 14151,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 47749,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4236502,
            "range": "± 14278",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4259383,
            "range": "± 7829",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4394787,
            "range": "± 5535",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 6836,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 13823,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 43957,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 3552172,
            "range": "± 5739",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 3555210,
            "range": "± 3991",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 3680932,
            "range": "± 5451",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 58695519545,
            "range": "± 97215879",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 422984231,
            "range": "± 2490725",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 40062317424,
            "range": "± 156243912",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - execution (transfer)",
            "value": 49365800,
            "range": "± 245413",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7150588389,
            "range": "± 18466308",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 277005634,
            "range": "± 1642774",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 243000969,
            "range": "± 894870",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1183471963,
            "range": "± 3911386",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "committer": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "distinct": false,
          "id": "8e406fc29fdbebbbee2008678177892bb5ad9922",
          "message": "chore(snarkvm): bump version for new release",
          "timestamp": "2023-05-31T14:50:27-07:00",
          "tree_id": "bd9a895ae1fd325b702051b041ccab8aa0cc153d",
          "url": "https://github.com/catnodes/snarkVM/commit/8e406fc29fdbebbbee2008678177892bb5ad9922"
        },
        "date": 1685640968524,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 113192503,
            "range": "± 5574560",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 803795667,
            "range": "± 23812050",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1473438092,
            "range": "± 27762954",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2277806121,
            "range": "± 45625954",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2882648852,
            "range": "± 46241158",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3229359664,
            "range": "± 28053826",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5878092214,
            "range": "± 86670799",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 10618198430,
            "range": "± 96749278",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 76153592,
            "range": "± 1215788",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 557674950,
            "range": "± 19683532",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4819401969,
            "range": "± 103110248",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 97123,
            "range": "± 3733",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 243178,
            "range": "± 12338",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1757281244,
            "range": "± 29236800",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 102176570,
            "range": "± 2823921",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 632017437,
            "range": "± 25288786",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 10434941538,
            "range": "± 455615715",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 8364,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 8396,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 31750648,
            "range": "± 1100809",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 15261475,
            "range": "± 468345",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 24053375,
            "range": "± 609212",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 6435654,
            "range": "± 210402",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 8326756,
            "range": "± 300270",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 20911624,
            "range": "± 303331",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 176340478,
            "range": "± 4288647",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1071515170,
            "range": "± 33328494",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 8449566,
            "range": "± 151409",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 10093832,
            "range": "± 255253",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 41118247,
            "range": "± 2693289",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 284584722,
            "range": "± 16672365",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 13766017,
            "range": "± 585029",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 446137,
            "range": "± 17974",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 1020497689,
            "range": "± 39160391",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 113022,
            "range": "± 1807",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 209879,
            "range": "± 9309",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 257276,
            "range": "± 9418",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 75747,
            "range": "± 3552",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 75236,
            "range": "± 4572",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 152028,
            "range": "± 12399",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 189066,
            "range": "± 19494",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 237501,
            "range": "± 14059",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 89487,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 93031,
            "range": "± 3427",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 177955,
            "range": "± 8377",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 180230,
            "range": "± 5984",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 217424,
            "range": "± 9058",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 188579,
            "range": "± 21659",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 204849,
            "range": "± 8833",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 305639,
            "range": "± 7253",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 303851,
            "range": "± 10143",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 294171,
            "range": "± 16803",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 4139182,
            "range": "± 143423",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 6168734,
            "range": "± 232912",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 25095442,
            "range": "± 429219",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 121962510,
            "range": "± 4106919",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1460537952,
            "range": "± 47298349",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 12340151956,
            "range": "± 274713602",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 4266349,
            "range": "± 53760",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 6436802,
            "range": "± 104174",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 28362783,
            "range": "± 507896",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 125521441,
            "range": "± 3571201",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1500828555,
            "range": "± 20779010",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 12417397037,
            "range": "± 293817069",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 4062376,
            "range": "± 78834",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6949515,
            "range": "± 128818",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 25897333,
            "range": "± 717939",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 122002539,
            "range": "± 3439175",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1448198185,
            "range": "± 42327456",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 12016627299,
            "range": "± 527864300",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3814502,
            "range": "± 94531",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5408850,
            "range": "± 81988",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 31743051,
            "range": "± 534291",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 181223005,
            "range": "± 2412857",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1454044217,
            "range": "± 31721865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 12169572797,
            "range": "± 621708903",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 4290419,
            "range": "± 173011",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 6030262,
            "range": "± 144758",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 82693608,
            "range": "± 2955169",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 117196002,
            "range": "± 2644481",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1367783372,
            "range": "± 64105648",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 12142752743,
            "range": "± 478517560",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4408444,
            "range": "± 172836",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 6163440,
            "range": "± 90916",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 25253811,
            "range": "± 821549",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 125694799,
            "range": "± 3024171",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1797401237,
            "range": "± 24242688",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11431700283,
            "range": "± 248464140",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 7543662,
            "range": "± 976551",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 9392531,
            "range": "± 1046449",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 31060698,
            "range": "± 1363322",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 128145291,
            "range": "± 3401405",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1049260916,
            "range": "± 35069122",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 14179250989,
            "range": "± 227950470",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3937815,
            "range": "± 102473",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 38753407,
            "range": "± 981696",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 389846374,
            "range": "± 10192171",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3753305200,
            "range": "± 159833494",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 39194128033,
            "range": "± 1047400852",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3901053,
            "range": "± 71139",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 41481408,
            "range": "± 729888",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 411940513,
            "range": "± 7225102",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 4129252245,
            "range": "± 37494787",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 40002606943,
            "range": "± 652473151",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3773999,
            "range": "± 140018",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 37909846,
            "range": "± 986184",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 400329219,
            "range": "± 12644559",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 4101193104,
            "range": "± 105377712",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 40398419218,
            "range": "± 795451937",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3974881,
            "range": "± 99024",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 40778725,
            "range": "± 696910",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 413912823,
            "range": "± 7409738",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 4059632413,
            "range": "± 53358934",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 39011956650,
            "range": "± 1297113768",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3982533,
            "range": "± 235955",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 41615195,
            "range": "± 1319682",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 413990913,
            "range": "± 12266046",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3948612705,
            "range": "± 91051222",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 42114941783,
            "range": "± 675669933",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5765734,
            "range": "± 226186",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 54628145,
            "range": "± 2884430",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 506151771,
            "range": "± 25134771",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 5490890453,
            "range": "± 196048857",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 53564226275,
            "range": "± 1572504523",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 4292752,
            "range": "± 91062",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 4207165,
            "range": "± 140958",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 4148459,
            "range": "± 123340",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 4078231,
            "range": "± 103541",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 4139485,
            "range": "± 125901",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 4109760,
            "range": "± 40903",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5420080,
            "range": "± 192242",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5511813,
            "range": "± 175130",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5820754,
            "range": "± 164353",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5868957,
            "range": "± 231551",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 4040012,
            "range": "± 130337",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5998028,
            "range": "± 115733",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 22758230,
            "range": "± 589531",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 22640327,
            "range": "± 568493",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 23098445,
            "range": "± 515218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 4106142,
            "range": "± 96655",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5988981,
            "range": "± 116158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 23717326,
            "range": "± 371724",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 119105229,
            "range": "± 2646595",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 121626249,
            "range": "± 2554865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 4142328,
            "range": "± 85558",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5888311,
            "range": "± 164095",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 25560476,
            "range": "± 379955",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 132012631,
            "range": "± 2129486",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8654",
            "value": 1015436589,
            "range": "± 15721899",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4333745,
            "range": "± 77345",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 8567938,
            "range": "± 454728",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 47165894,
            "range": "± 349898",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 242335607,
            "range": "± 2365926",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2257748149,
            "range": "± 31406301",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 4044535,
            "range": "± 99573",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 4052133,
            "range": "± 87058",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3988242,
            "range": "± 148829",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 4085684,
            "range": "± 64793",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 4113253,
            "range": "± 301248",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 4137758,
            "range": "± 113220",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 4120373,
            "range": "± 93959",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 4033891,
            "range": "± 129297",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 4037356,
            "range": "± 74198",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 4060091,
            "range": "± 87996",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3980734,
            "range": "± 74564",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3991250,
            "range": "± 151529",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3969091,
            "range": "± 100212",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3968133,
            "range": "± 80189",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3883986,
            "range": "± 88634",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 4017873,
            "range": "± 59638",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3963090,
            "range": "± 53987",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3961342,
            "range": "± 68338",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 4047499,
            "range": "± 99495",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 4103774,
            "range": "± 102784",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 4065196,
            "range": "± 83902",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 4134887,
            "range": "± 65776",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 4110707,
            "range": "± 57763",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 4222718,
            "range": "± 85359",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 4145693,
            "range": "± 86593",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 4143663,
            "range": "± 72334",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 4303994,
            "range": "± 139194",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 4057880,
            "range": "± 79894",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4519672,
            "range": "± 83004",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 4200998,
            "range": "± 59129",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 5045979,
            "range": "± 102678",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 4207124,
            "range": "± 56906",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 195415,
            "range": "± 9364",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 217822,
            "range": "± 15762",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1260,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 866,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 544,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 92093,
            "range": "± 5946",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1869722,
            "range": "± 91935",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 573313,
            "range": "± 56456",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4567,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 3288,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1981,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 8,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_sub_noborrow",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_num_bits",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 70,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 65,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11674,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 81317,
            "range": "± 3876",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 45,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 84,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 255,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 150,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6689,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 180,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4545,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 23818,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 26,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 274,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 204,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12287,
            "range": "± 4484",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 127413,
            "range": "± 13632",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_num_bits",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sub_assign",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 36,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_double",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_square",
            "value": 37,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6253,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 33079,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 37,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 600321,
            "range": "± 42832",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1245990,
            "range": "± 65410",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 2144501,
            "range": "± 104029",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 34362,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 75961,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 244680,
            "range": "± 6646",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 24145266,
            "range": "± 319282",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 23789697,
            "range": "± 836415",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 24370373,
            "range": "± 689992",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 451,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 1021,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3064,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 285,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 483,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 17587,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 34076,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 64663,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 210315,
            "range": "± 8536",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 19243112,
            "range": "± 731445",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 18908686,
            "range": "± 572613",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 21301775,
            "range": "± 908798",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 9331,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 18861,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 56281,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 5043258,
            "range": "± 109741",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4883204,
            "range": "± 116723",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 5094445,
            "range": "± 103713",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 8068,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 17248,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 48373,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 4385756,
            "range": "± 189016",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 4223136,
            "range": "± 166636",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 4506317,
            "range": "± 105944",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 73503601823,
            "range": "± 834030852",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 545683569,
            "range": "± 20989901",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 50877373884,
            "range": "± 429119116",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - execution (transfer)",
            "value": 64932468,
            "range": "± 2080958",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8931746513,
            "range": "± 47976317",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 358750657,
            "range": "± 4877407",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 309509447,
            "range": "± 3126034",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1501988657,
            "range": "± 12670566",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
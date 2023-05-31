window.BENCHMARK_DATA = {
  "lastUpdate": 1685525490721,
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
      }
    ]
  }
}
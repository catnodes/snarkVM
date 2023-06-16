window.BENCHMARK_DATA = {
  "lastUpdate": 1686910861541,
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
      },
      {
        "commit": {
          "author": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "576c1b220a84686cee0b2af750a8835aaf30ff0e",
          "message": "Merge pull request #1611 from zhiqiangxu/reuse_compute_key\n\nreuse compute_key for Request.sign",
          "timestamp": "2023-06-01T12:30:07-07:00",
          "tree_id": "7ea400f4dc071b9268bd9c7f01b80128e32e130c",
          "url": "https://github.com/catnodes/snarkVM/commit/576c1b220a84686cee0b2af750a8835aaf30ff0e"
        },
        "date": 1685736132865,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 89943504,
            "range": "± 800400",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 626400056,
            "range": "± 1787931",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1154026086,
            "range": "± 35827351",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1777573101,
            "range": "± 61306400",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2256359504,
            "range": "± 7683418",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2553908268,
            "range": "± 15296848",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4670611814,
            "range": "± 15706276",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8412291135,
            "range": "± 21665054",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 58646760,
            "range": "± 22176",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 435676885,
            "range": "± 3486659",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 3877454698,
            "range": "± 50782575",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 80706,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 201605,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1392462271,
            "range": "± 2868517",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 84585666,
            "range": "± 573623",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 523552892,
            "range": "± 4246982",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8651132867,
            "range": "± 20874902",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 6819,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 7023,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 24993982,
            "range": "± 613073",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 11682002,
            "range": "± 4937",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 18622730,
            "range": "± 505643",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 4992013,
            "range": "± 2409",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6257108,
            "range": "± 49842",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16471418,
            "range": "± 177203",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 136796709,
            "range": "± 973248",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 834760744,
            "range": "± 8853409",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6512842,
            "range": "± 28741",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 7968609,
            "range": "± 48445",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 29343295,
            "range": "± 1048240",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 220712216,
            "range": "± 6876893",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 7001587,
            "range": "± 5161",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 433568,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 747128110,
            "range": "± 1636888",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 89591,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 174812,
            "range": "± 5270",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 221989,
            "range": "± 5197",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 66900,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 66763,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 133797,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 155567,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 200536,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 78228,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 78286,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 156272,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 156367,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 195607,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 172345,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 172450,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 259722,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 260161,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 260181,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3342816,
            "range": "± 2336",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5052807,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 21837821,
            "range": "± 22529",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 97372217,
            "range": "± 3039652",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1163441992,
            "range": "± 3830384",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 9922602284,
            "range": "± 17756219",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3252886,
            "range": "± 2257",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 4984852,
            "range": "± 4362",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 21944824,
            "range": "± 165715",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 94004593,
            "range": "± 4879096",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1170693480,
            "range": "± 1732185",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 9981738455,
            "range": "± 10015044",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3254690,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5641255,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21190102,
            "range": "± 119929",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 99329432,
            "range": "± 2783081",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1170968500,
            "range": "± 4128480",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 9983012011,
            "range": "± 11567719",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3253855,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4585591,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 24763853,
            "range": "± 175310",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 140575399,
            "range": "± 672322",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1170560916,
            "range": "± 2517607",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 9988746047,
            "range": "± 11198217",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3257163,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4688901,
            "range": "± 3202",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 66877385,
            "range": "± 811378",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 96836058,
            "range": "± 2894246",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1119954018,
            "range": "± 2280750",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 9934539444,
            "range": "± 40485768",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3432508,
            "range": "± 6792",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4779706,
            "range": "± 14287",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19779725,
            "range": "± 188916",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 101264030,
            "range": "± 2695726",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1487502265,
            "range": "± 6166975",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9468599359,
            "range": "± 16329988",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5399604,
            "range": "± 568951",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 6993122,
            "range": "± 559152",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 23591848,
            "range": "± 535266",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 100502679,
            "range": "± 804550",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 857785576,
            "range": "± 6095221",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11583328522,
            "range": "± 17396150",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3238060,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 32388624,
            "range": "± 11624",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 323886231,
            "range": "± 27458",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3237055668,
            "range": "± 229069",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 32387269414,
            "range": "± 1702282",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3232970,
            "range": "± 3429",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 32387219,
            "range": "± 8241",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 322913469,
            "range": "± 48140",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3239270821,
            "range": "± 347959",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 32379206665,
            "range": "± 32517963",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3228986,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 32409132,
            "range": "± 406882",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 324224727,
            "range": "± 36285",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3244963996,
            "range": "± 181001",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 32452675358,
            "range": "± 18802980",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3241713,
            "range": "± 2223",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 32454009,
            "range": "± 6049",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 324311661,
            "range": "± 33580",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3246111566,
            "range": "± 267318",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 32441416670,
            "range": "± 1469381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3377035,
            "range": "± 5497",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 33702266,
            "range": "± 47075",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 336052065,
            "range": "± 130195",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3364665991,
            "range": "± 731693",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 33623868884,
            "range": "± 34241009",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4759392,
            "range": "± 151769",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 42754000,
            "range": "± 334132",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 421517707,
            "range": "± 2138682",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4226338545,
            "range": "± 40005015",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 42111439209,
            "range": "± 216953013",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3227550,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3228592,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3228367,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3227650,
            "range": "± 5973",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3223405,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3228925,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4541853,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4538406,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4542566,
            "range": "± 1996",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4539957,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3229189,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4735356,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 19281848,
            "range": "± 8097",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 19281511,
            "range": "± 10563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 19285231,
            "range": "± 15563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3226951,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4737003,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 19274011,
            "range": "± 8026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 99773359,
            "range": "± 2301037",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 100623529,
            "range": "± 2056101",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3252716,
            "range": "± 3670",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4678605,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 20640005,
            "range": "± 19419",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 106239381,
            "range": "± 1955243",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8621",
            "value": 800595263,
            "range": "± 6269206",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3381805,
            "range": "± 36899",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 6289770,
            "range": "± 40937",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 37668883,
            "range": "± 41093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 196343052,
            "range": "± 1736162",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1797960943,
            "range": "± 6697160",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3250151,
            "range": "± 1563",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3231017,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3251925,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3231723,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3254906,
            "range": "± 2897",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3233100,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3253840,
            "range": "± 2229",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3233993,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3251434,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3234605,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3252314,
            "range": "± 6315",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3236624,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3252788,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3235664,
            "range": "± 993",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3249811,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3235647,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3253915,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3239459,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3258178,
            "range": "± 13768",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3240449,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3258910,
            "range": "± 3166",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3240925,
            "range": "± 2180",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3276493,
            "range": "± 2384",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3242711,
            "range": "± 4844",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3316118,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3242051,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3394710,
            "range": "± 11697",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3248861,
            "range": "± 2435",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3554650,
            "range": "± 27884",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3249158,
            "range": "± 6279",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3913877,
            "range": "± 52554",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3255229,
            "range": "± 24622",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 157415,
            "range": "± 2780",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 172638,
            "range": "± 3871",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 928,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 682,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 74275,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1514265,
            "range": "± 7268",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 410573,
            "range": "± 33924",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3535,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2516,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1599,
            "range": "± 1",
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
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 14,
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
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10561,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 67830,
            "range": "± 145",
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
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 118,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5222,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3627,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 20016,
            "range": "± 13",
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 213,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 168,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11248,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 114278,
            "range": "± 5356",
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
            "value": 30,
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
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5427,
            "range": "± 10",
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
            "value": 28508,
            "range": "± 23",
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
            "value": 485592,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 980277,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1695401,
            "range": "± 2862",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 28515,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 57093,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 149099,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 19283323,
            "range": "± 33144",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 19293129,
            "range": "± 26661",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 20005636,
            "range": "± 59688",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 791,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2448,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 193,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 321,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 14404,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 28028,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 56765,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 141695,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 16587457,
            "range": "± 61606",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 16743220,
            "range": "± 31600",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 17143347,
            "range": "± 49509",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7318,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 14327,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 35756,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4192533,
            "range": "± 7042",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4197401,
            "range": "± 11913",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4338573,
            "range": "± 6808",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 6638,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 13330,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 33493,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 3559970,
            "range": "± 15372",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 3517398,
            "range": "± 11152",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 3622433,
            "range": "± 8035",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 58133458219,
            "range": "± 129106524",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 450406176,
            "range": "± 2722128",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 39685396721,
            "range": "± 232448553",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - execution (transfer)",
            "value": 48321883,
            "range": "± 1442555",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7099534930,
            "range": "± 20098320",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 272917336,
            "range": "± 950328",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 238018819,
            "range": "± 809470",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1176885125,
            "range": "± 5485832",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef8231a492e08acf6d668653ee795e2d1fe06851",
          "message": "Merge pull request #1622 from AleoHQ/dependabot/cargo/once_cell-1.18.0\n\nBump once_cell from 1.17.2 to 1.18.0",
          "timestamp": "2023-06-05T10:57:15-07:00",
          "tree_id": "39221d4261563ecef9f8063045a9d8dadcd0d5a9",
          "url": "https://github.com/catnodes/snarkVM/commit/ef8231a492e08acf6d668653ee795e2d1fe06851"
        },
        "date": 1686043212461,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 101998015,
            "range": "± 3425133",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 696473806,
            "range": "± 20652121",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1273233175,
            "range": "± 39237645",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1969532141,
            "range": "± 32029938",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2482279383,
            "range": "± 10543865",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2755324384,
            "range": "± 18593451",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5139219323,
            "range": "± 12274542",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9135313026,
            "range": "± 67322166",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 69812478,
            "range": "± 253673",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 501346374,
            "range": "± 918799",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4649115469,
            "range": "± 218617786",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 90308,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 225710,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1514374967,
            "range": "± 5466401",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 96004678,
            "range": "± 837633",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 604419736,
            "range": "± 2566576",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 10087851051,
            "range": "± 49096298",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 7517,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 8228,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 27808813,
            "range": "± 744449",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 13569611,
            "range": "± 9842",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 21306970,
            "range": "± 624789",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5808625,
            "range": "± 16754",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7140386,
            "range": "± 18745",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 18810233,
            "range": "± 70401",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 155202794,
            "range": "± 995605",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 921356994,
            "range": "± 4760039",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7336065,
            "range": "± 48526",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9104420,
            "range": "± 37002",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 31996632,
            "range": "± 1020794",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 234462925,
            "range": "± 5647267",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 7777523,
            "range": "± 5739",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 485903,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 622957804,
            "range": "± 4733663",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 99348,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 191688,
            "range": "± 3937",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 242615,
            "range": "± 5483",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 71545,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 71598,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 143604,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 167729,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 215668,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 80542,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 80504,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 161462,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 161646,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 202319,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 176059,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 174619,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 263981,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 262690,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 262682,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3862611,
            "range": "± 2617",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5860037,
            "range": "± 64060",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 25402449,
            "range": "± 5888",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 114592464,
            "range": "± 1570275",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1372448921,
            "range": "± 4556601",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11650341129,
            "range": "± 60231423",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3759447,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5759007,
            "range": "± 4376",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 25315043,
            "range": "± 693989",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 111603525,
            "range": "± 640904",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1379066418,
            "range": "± 6825941",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 11839037525,
            "range": "± 57710207",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3759234,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6538317,
            "range": "± 4030",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 24470615,
            "range": "± 637902",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 114278750,
            "range": "± 2873832",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1371792998,
            "range": "± 4052970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 11710860084,
            "range": "± 32603123",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3755982,
            "range": "± 2771",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5280971,
            "range": "± 3816",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 28535188,
            "range": "± 822788",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 165854368,
            "range": "± 1492263",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1369921189,
            "range": "± 2924758",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11717539360,
            "range": "± 80385058",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3763936,
            "range": "± 6763",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5414566,
            "range": "± 5786",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 77362205,
            "range": "± 994020",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 116277971,
            "range": "± 2696454",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1321079543,
            "range": "± 5472216",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 11645045372,
            "range": "± 23895047",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3935423,
            "range": "± 10583",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5467919,
            "range": "± 14130",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 22803359,
            "range": "± 546619",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 117241436,
            "range": "± 2769200",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1773976853,
            "range": "± 3470182",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11174711349,
            "range": "± 47007740",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5688937,
            "range": "± 379690",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7376401,
            "range": "± 501947",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 25932543,
            "range": "± 1101865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 119198093,
            "range": "± 1974960",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1001642845,
            "range": "± 4655670",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13592733000,
            "range": "± 66263327",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3766977,
            "range": "± 4025",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 38009893,
            "range": "± 10943",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 380288551,
            "range": "± 64638",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3803102545,
            "range": "± 652631",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38028660438,
            "range": "± 3483681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3764974,
            "range": "± 1854",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 38035479,
            "range": "± 15758",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 380359394,
            "range": "± 82024",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3806016156,
            "range": "± 913935",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38041129764,
            "range": "± 16923355",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3765676,
            "range": "± 22062",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 38046283,
            "range": "± 19980",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 380852515,
            "range": "± 1707037",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3811268900,
            "range": "± 3529081",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 38129334388,
            "range": "± 17700558",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3769789,
            "range": "± 5355",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 38096015,
            "range": "± 30404",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 381237839,
            "range": "± 115958",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3812273974,
            "range": "± 1515039",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 38130056175,
            "range": "± 8225286",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3916993,
            "range": "± 4995",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 39405316,
            "range": "± 101005",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 393937620,
            "range": "± 357483",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3949365389,
            "range": "± 3662241",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 39420413440,
            "range": "± 35788247",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5147627,
            "range": "± 153897",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 49321057,
            "range": "± 561345",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 483185176,
            "range": "± 4526434",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4752730867,
            "range": "± 66849415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 47669427584,
            "range": "± 528844671",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3758968,
            "range": "± 4448",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3759305,
            "range": "± 2286",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3759272,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3760537,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3758169,
            "range": "± 2909",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3755059,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5287071,
            "range": "± 2450",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5291963,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5287812,
            "range": "± 2545",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5283984,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3751063,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5510925,
            "range": "± 10891",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 22512368,
            "range": "± 70786",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 22508732,
            "range": "± 81085",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 22506442,
            "range": "± 85061",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3753770,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5509544,
            "range": "± 2298",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 22523575,
            "range": "± 68179",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 116292704,
            "range": "± 1906193",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 116133773,
            "range": "± 2749489",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3798202,
            "range": "± 4098",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5682486,
            "range": "± 5603",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 24839616,
            "range": "± 105316",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 124543600,
            "range": "± 2061707",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8624",
            "value": 936525513,
            "range": "± 6206526",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3906366,
            "range": "± 44781",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7426908,
            "range": "± 47022",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 43171038,
            "range": "± 140745",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 226733762,
            "range": "± 1175801",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2105923914,
            "range": "± 7552838",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3751748,
            "range": "± 2101",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3754529,
            "range": "± 1951",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3747803,
            "range": "± 2379",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3754349,
            "range": "± 3900",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3752301,
            "range": "± 6264",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3755260,
            "range": "± 2744",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3749413,
            "range": "± 18222",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3753671,
            "range": "± 2832",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3754833,
            "range": "± 3221",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3756315,
            "range": "± 3393",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3760229,
            "range": "± 5698",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3758677,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3755595,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3759557,
            "range": "± 18690",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3755022,
            "range": "± 4767",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3758354,
            "range": "± 10190",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3756331,
            "range": "± 8589",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3758712,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3758348,
            "range": "± 16760",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3758299,
            "range": "± 3706",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3761246,
            "range": "± 4291",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3755477,
            "range": "± 8149",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3771510,
            "range": "± 4290",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3758960,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3814564,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3760281,
            "range": "± 6819",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3905697,
            "range": "± 9329",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3760105,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4028611,
            "range": "± 18450",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3758712,
            "range": "± 4160",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4349180,
            "range": "± 54235",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3763465,
            "range": "± 20330",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 184109,
            "range": "± 3528",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 198331,
            "range": "± 3474",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1049,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 752,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 459,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 86674,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1733492,
            "range": "± 7507",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 463542,
            "range": "± 2660",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4064,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2886,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1783,
            "range": "± 4",
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
            "value": 8,
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
            "value": 66,
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
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11207,
            "range": "± 62",
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
            "value": 78434,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 206,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6006,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4188,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 22587,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 17,
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
            "value": 227,
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
            "value": 155,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12357,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 122605,
            "range": "± 4928",
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
            "value": 5,
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
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6271,
            "range": "± 24",
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
            "value": 33751,
            "range": "± 45",
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
            "value": 565131,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1137085,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1949465,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 33015,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 69051,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 169048,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 22303429,
            "range": "± 16703",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 22295456,
            "range": "± 26616",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 22853440,
            "range": "± 45417",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 346,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 721,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2254,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 226,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 347,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 15441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 30926,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 60925,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 160033,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 19090009,
            "range": "± 34032",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 19136697,
            "range": "± 42679",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 19703707,
            "range": "± 18168",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7701,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 15503,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 39789,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4784621,
            "range": "± 11343",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4777965,
            "range": "± 2769",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4957894,
            "range": "± 10841",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 7149,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 14652,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 36935,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 3994466,
            "range": "± 5141",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 3996042,
            "range": "± 5622",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 4137653,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 64604462513,
            "range": "± 371958097",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 477228951,
            "range": "± 2945237",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 42713781743,
            "range": "± 191130968",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - execution (transfer)",
            "value": 54648469,
            "range": "± 943010",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8252380252,
            "range": "± 12924593",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 357543768,
            "range": "± 32468113",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 275011338,
            "range": "± 5903510",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1404583051,
            "range": "± 6394432",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f69dc53bf3243eb92c3cf8e9d5fdced3ca00d182",
          "message": "Merge pull request #1625 from AleoHQ/dependabot/cargo/hashbrown-0.14.0\n\nBump hashbrown from 0.13.2 to 0.14.0",
          "timestamp": "2023-06-06T09:57:40-07:00",
          "tree_id": "c682daf9d53306fa6d3bfe80b9a096fdea1cecac",
          "url": "https://github.com/catnodes/snarkVM/commit/f69dc53bf3243eb92c3cf8e9d5fdced3ca00d182"
        },
        "date": 1686114752576,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 101991269,
            "range": "± 3465284",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 689051104,
            "range": "± 1550795",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1267507634,
            "range": "± 40209792",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1954087350,
            "range": "± 6386715",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2472636534,
            "range": "± 5081164",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2733770370,
            "range": "± 9981476",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5046779369,
            "range": "± 15464784",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9117405452,
            "range": "± 15210733",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 69888618,
            "range": "± 99602",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 499401159,
            "range": "± 2221219",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4282804907,
            "range": "± 27704645",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 89660,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 224374,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1508755414,
            "range": "± 2668663",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 96205959,
            "range": "± 637385",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 603210605,
            "range": "± 1234479",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 9990810874,
            "range": "± 19116796",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 7542,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 7549,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 27145051,
            "range": "± 1185232",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 13610294,
            "range": "± 6417",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 21709517,
            "range": "± 437726",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5840020,
            "range": "± 6810",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7127950,
            "range": "± 18243",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 18751341,
            "range": "± 58497",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 154240005,
            "range": "± 702157",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 918681100,
            "range": "± 3154149",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7345853,
            "range": "± 34596",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9032610,
            "range": "± 48459",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 32483075,
            "range": "± 964419",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 238746367,
            "range": "± 7387908",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 7949368,
            "range": "± 8494",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 491571,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 636489461,
            "range": "± 1125701",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 98845,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 190101,
            "range": "± 4952",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 241753,
            "range": "± 4599",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 71608,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 71766,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 143821,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 168320,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 216253,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 80191,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 80340,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 161250,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 161602,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 201884,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 174263,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 174236,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 262055,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 262199,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 262221,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3840442,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5827625,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 25299742,
            "range": "± 6558",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 113854916,
            "range": "± 2441939",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1357755768,
            "range": "± 1323929",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11582513442,
            "range": "± 37742746",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3735215,
            "range": "± 3110",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5716603,
            "range": "± 7014",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 25187695,
            "range": "± 81635",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 109883988,
            "range": "± 169147",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1375005468,
            "range": "± 4651186",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 11665547231,
            "range": "± 17200472",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3728541,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6490136,
            "range": "± 2382",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 24297394,
            "range": "± 83374",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 110461181,
            "range": "± 2365134",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1366673366,
            "range": "± 5097871",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 11650917456,
            "range": "± 12906793",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3730860,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5245284,
            "range": "± 4762",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 28383632,
            "range": "± 89107",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 163605260,
            "range": "± 992001",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1364541530,
            "range": "± 1832921",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11653665276,
            "range": "± 14546955",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3738548,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5371417,
            "range": "± 3673",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 75852534,
            "range": "± 250278",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 114019199,
            "range": "± 2062753",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1310280835,
            "range": "± 4040082",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 11615917028,
            "range": "± 5647082",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3906237,
            "range": "± 10771",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5435596,
            "range": "± 14686",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 22630849,
            "range": "± 60904",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 114264431,
            "range": "± 2317778",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1735301715,
            "range": "± 2640251",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11072993460,
            "range": "± 17833511",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5772589,
            "range": "± 370169",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7414226,
            "range": "± 465278",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 26055269,
            "range": "± 672261",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 115020420,
            "range": "± 6196626",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 998018454,
            "range": "± 1887749",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13492185217,
            "range": "± 15524031",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3747168,
            "range": "± 3146",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 37856982,
            "range": "± 14461",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 378419372,
            "range": "± 83064",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3785278130,
            "range": "± 331923",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 37852268765,
            "range": "± 1560351",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3741373,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 37870705,
            "range": "± 11576",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 378742124,
            "range": "± 48257",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3783966299,
            "range": "± 326032",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 37925504354,
            "range": "± 1245669",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3745171,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 37859162,
            "range": "± 11625",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 378557520,
            "range": "± 89093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3785694304,
            "range": "± 235483",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 37884041495,
            "range": "± 790810",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3749678,
            "range": "± 4308",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 37917525,
            "range": "± 8462",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 379182251,
            "range": "± 55731",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3792245406,
            "range": "± 256326",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 37907771157,
            "range": "± 1251429",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3890234,
            "range": "± 11031",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 39216476,
            "range": "± 17731",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 391723536,
            "range": "± 194645",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3919216570,
            "range": "± 910473",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 39181113778,
            "range": "± 1502613",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5153993,
            "range": "± 174026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 46857136,
            "range": "± 213953",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 470326469,
            "range": "± 172093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4737403538,
            "range": "± 2669332",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 47073628604,
            "range": "± 5970112",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3765033,
            "range": "± 2584",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3763292,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3765302,
            "range": "± 2130",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3764819,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3767166,
            "range": "± 2205",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3788259,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5361696,
            "range": "± 5947",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5363051,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5358955,
            "range": "± 5446",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5360490,
            "range": "± 3833",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3805646,
            "range": "± 4221",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5614565,
            "range": "± 3374",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 23178708,
            "range": "± 410985",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 23178286,
            "range": "± 418662",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 23180082,
            "range": "± 421943",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3825905,
            "range": "± 1686",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5638711,
            "range": "± 4150",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 23200891,
            "range": "± 410739",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 111659042,
            "range": "± 3030073",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 113242583,
            "range": "± 2519689",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3872853,
            "range": "± 5769",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5571919,
            "range": "± 7416",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 24987599,
            "range": "± 367139",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 122187886,
            "range": "± 2215305",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8616",
            "value": 933992828,
            "range": "± 4916412",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4003247,
            "range": "± 35814",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7579851,
            "range": "± 57534",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 45165260,
            "range": "± 52997",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 227669726,
            "range": "± 850320",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2081375614,
            "range": "± 2714809",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3729875,
            "range": "± 3080",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3753274,
            "range": "± 2062",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3736331,
            "range": "± 2914",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3752589,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3733872,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3751795,
            "range": "± 3278",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3732895,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3751815,
            "range": "± 1814",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3730139,
            "range": "± 2784",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3750043,
            "range": "± 1265",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3731942,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3749939,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3737988,
            "range": "± 2763",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3752353,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3735948,
            "range": "± 1529",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3753390,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3734019,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3745546,
            "range": "± 1597",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3740381,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3748277,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3745059,
            "range": "± 3852",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3753373,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3752106,
            "range": "± 3025",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3748185,
            "range": "± 1318",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3793124,
            "range": "± 6056",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3752109,
            "range": "± 5666",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3856192,
            "range": "± 6318",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3746260,
            "range": "± 5527",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4007607,
            "range": "± 26166",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3749829,
            "range": "± 4197",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4230916,
            "range": "± 100670",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3754727,
            "range": "± 19412",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 184016,
            "range": "± 3156",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 196455,
            "range": "± 2964",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1040,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 752,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 458,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 86563,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1739034,
            "range": "± 8241",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 464059,
            "range": "± 2918",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4059,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2852,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1779,
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
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 8,
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
            "value": 65,
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
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11236,
            "range": "± 60",
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
            "value": 78546,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 210,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6009,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 140,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4255,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 22553,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 17,
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
            "value": 225,
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
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12363,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 125258,
            "range": "± 4854",
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
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 11,
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
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6270,
            "range": "± 24",
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
            "value": 33913,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 566075,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1138240,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1947319,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 126385,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 254049,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 636397,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 76839034,
            "range": "± 88707",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 76168584,
            "range": "± 78398",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 78836986,
            "range": "± 110536",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 359,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 731,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2255,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 227,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 361,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 15394,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 126819,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 252083,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 634297,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 75156661,
            "range": "± 271619",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 73470061,
            "range": "± 49495",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 75813276,
            "range": "± 167471",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7978,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 15354,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 39870,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4602311,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4606114,
            "range": "± 9652",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4754304,
            "range": "± 3077",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4677,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9586,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 16666,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1787764,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1801422,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1884329,
            "range": "± 1300",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 49282206901,
            "range": "± 113972026",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 445002968,
            "range": "± 1450456",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 26419329106,
            "range": "± 64465201",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8233563533,
            "range": "± 20556977",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 305976532,
            "range": "± 977314",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 274384094,
            "range": "± 14819124",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1403502979,
            "range": "± 4585086",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bccc8e86b86a7855698655e3c4fc352797fdebb",
          "message": "Merge pull request #1628 from AleoHQ/feat/ledger-updates\n\nMigrates and updates `Ledger` to check transactions and blocks with state",
          "timestamp": "2023-06-06T18:15:52-07:00",
          "tree_id": "fdabbcab54a68acda1b6812b5778bab38aaeee7c",
          "url": "https://github.com/catnodes/snarkVM/commit/9bccc8e86b86a7855698655e3c4fc352797fdebb"
        },
        "date": 1686133144805,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 107981034,
            "range": "± 2508504",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 755651711,
            "range": "± 14860848",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1429817752,
            "range": "± 27664333",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2152828827,
            "range": "± 52059131",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2764213579,
            "range": "± 72029220",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3151608800,
            "range": "± 39118965",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5521109362,
            "range": "± 120626076",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9933937411,
            "range": "± 98499890",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 69114555,
            "range": "± 1374562",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 524659227,
            "range": "± 12891802",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4461457581,
            "range": "± 99552854",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 96681,
            "range": "± 4470",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 233399,
            "range": "± 15592",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1756276000,
            "range": "± 16384961",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 108803270,
            "range": "± 2350375",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 658708257,
            "range": "± 14612573",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 10460656398,
            "range": "± 303614122",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 8383,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 9064,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 30612060,
            "range": "± 1270398",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 13969999,
            "range": "± 407666",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 22879015,
            "range": "± 686589",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5884464,
            "range": "± 235557",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7610113,
            "range": "± 142677",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 20423713,
            "range": "± 674355",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 163646845,
            "range": "± 6081959",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1042098085,
            "range": "± 40556493",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7486362,
            "range": "± 227188",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9701048,
            "range": "± 531076",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 36458858,
            "range": "± 1135219",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 294072817,
            "range": "± 15186309",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 11476119,
            "range": "± 478651",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 397665,
            "range": "± 9606",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 1118816411,
            "range": "± 24484303",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 108297,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 218925,
            "range": "± 20615",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 263145,
            "range": "± 17487",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 74610,
            "range": "± 3552",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 74092,
            "range": "± 5163",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 148271,
            "range": "± 7320",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 171283,
            "range": "± 10498",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 224411,
            "range": "± 13147",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 89099,
            "range": "± 6208",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 87256,
            "range": "± 8621",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 173440,
            "range": "± 9287",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 174933,
            "range": "± 12900",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 214795,
            "range": "± 16183",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 181980,
            "range": "± 11549",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 180766,
            "range": "± 13004",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 272265,
            "range": "± 17559",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 278250,
            "range": "± 16656",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 281479,
            "range": "± 20739",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 4033130,
            "range": "± 153608",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 6164570,
            "range": "± 231761",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 26286270,
            "range": "± 1346165",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 122195378,
            "range": "± 3169129",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1412974043,
            "range": "± 32277089",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11841192159,
            "range": "± 100623158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3890361,
            "range": "± 142101",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5558951,
            "range": "± 234941",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 24678292,
            "range": "± 1502673",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 111572686,
            "range": "± 3759323",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1449603017,
            "range": "± 39350611",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 12367898109,
            "range": "± 294843251",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3770609,
            "range": "± 154487",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6847288,
            "range": "± 151687",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 24995025,
            "range": "± 762886",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 122499082,
            "range": "± 3248514",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1481190756,
            "range": "± 35872048",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 12498375163,
            "range": "± 116855071",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3889281,
            "range": "± 73861",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5534145,
            "range": "± 127443",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 29788602,
            "range": "± 1068641",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 179346428,
            "range": "± 5364808",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1481570471,
            "range": "± 31972288",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 12527787893,
            "range": "± 109002539",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 4028804,
            "range": "± 113804",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5851423,
            "range": "± 161788",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 82809744,
            "range": "± 1562013",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 124592494,
            "range": "± 4723015",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1387431144,
            "range": "± 20689051",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 12403718325,
            "range": "± 124114517",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4158527,
            "range": "± 95979",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5669687,
            "range": "± 99118",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 23578128,
            "range": "± 863479",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 124907611,
            "range": "± 2272746",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1833190192,
            "range": "± 35821852",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11636861011,
            "range": "± 222027228",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 6781202,
            "range": "± 698381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 8810655,
            "range": "± 968517",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 28738607,
            "range": "± 1288678",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 120289099,
            "range": "± 2703599",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1033427801,
            "range": "± 25348729",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13662371878,
            "range": "± 159720280",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3800075,
            "range": "± 154274",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 37235975,
            "range": "± 1336745",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 380365240,
            "range": "± 9869293",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3945049740,
            "range": "± 119304577",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38285205129,
            "range": "± 273837343",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3758283,
            "range": "± 94126",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 38144851,
            "range": "± 1232463",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 378479462,
            "range": "± 12222964",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3838553407,
            "range": "± 84285909",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38368491458,
            "range": "± 347389070",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3859316,
            "range": "± 97945",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 37437195,
            "range": "± 1494785",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 388240088,
            "range": "± 11930560",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3969093361,
            "range": "± 56484600",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 38897226279,
            "range": "± 460940112",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3952512,
            "range": "± 107225",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 39228003,
            "range": "± 1833025",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 391883162,
            "range": "± 11817643",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3949616125,
            "range": "± 74406454",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 40143203898,
            "range": "± 1316988819",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 4328522,
            "range": "± 159820",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 44235485,
            "range": "± 1636998",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 417081222,
            "range": "± 9672316",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4227318471,
            "range": "± 50574437",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 40887485494,
            "range": "± 854726879",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 6027778,
            "range": "± 456746",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 53513252,
            "range": "± 2365286",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 518096025,
            "range": "± 29605649",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 5234709521,
            "range": "± 100447114",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 52630911762,
            "range": "± 1840409802",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3709745,
            "range": "± 249268",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3649489,
            "range": "± 161085",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3636537,
            "range": "± 123038",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3607890,
            "range": "± 186174",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3639021,
            "range": "± 142245",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3726478,
            "range": "± 138107",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5097637,
            "range": "± 233644",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5216678,
            "range": "± 329563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5200679,
            "range": "± 218734",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5007631,
            "range": "± 169603",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3671957,
            "range": "± 79167",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5248689,
            "range": "± 165400",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 21646526,
            "range": "± 764235",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 22383289,
            "range": "± 1109480",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 22168968,
            "range": "± 652244",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3697737,
            "range": "± 121445",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5344428,
            "range": "± 224371",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 22866346,
            "range": "± 642407",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 118094116,
            "range": "± 4796393",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 119786286,
            "range": "± 4937586",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3889840,
            "range": "± 132648",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5619086,
            "range": "± 324471",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 23974689,
            "range": "± 726973",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 127723910,
            "range": "± 3360527",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8628",
            "value": 960445119,
            "range": "± 20750480",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3896890,
            "range": "± 187383",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 6482250,
            "range": "± 194030",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 42347185,
            "range": "± 1134126",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 234276427,
            "range": "± 6317072",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2207778220,
            "range": "± 50195234",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3914724,
            "range": "± 144255",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3673576,
            "range": "± 113023",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3721156,
            "range": "± 170486",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3699261,
            "range": "± 91325",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3549083,
            "range": "± 97658",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3675256,
            "range": "± 180411",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3582712,
            "range": "± 115563",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3657322,
            "range": "± 106353",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3810657,
            "range": "± 238289",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3896842,
            "range": "± 124888",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3816483,
            "range": "± 185126",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3554457,
            "range": "± 106347",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3568892,
            "range": "± 145458",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3613262,
            "range": "± 140427",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3614542,
            "range": "± 120042",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3843721,
            "range": "± 99064",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3796617,
            "range": "± 73297",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3974053,
            "range": "± 46329",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3861743,
            "range": "± 204283",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3707355,
            "range": "± 128907",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3704883,
            "range": "± 120054",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3585955,
            "range": "± 70325",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3750254,
            "range": "± 122960",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3585849,
            "range": "± 129005",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3699662,
            "range": "± 153197",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3813152,
            "range": "± 95541",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3925526,
            "range": "± 109033",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3854872,
            "range": "± 188355",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4143256,
            "range": "± 137362",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3830996,
            "range": "± 98129",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4611662,
            "range": "± 290056",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3717616,
            "range": "± 235557",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 185704,
            "range": "± 14771",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 214184,
            "range": "± 18771",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1069,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 798,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 505,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 85576,
            "range": "± 5679",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1751191,
            "range": "± 100883",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 536008,
            "range": "± 36885",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3940,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2938,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1795,
            "range": "± 115",
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
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 17,
            "range": "± 1",
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
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11300,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 79057,
            "range": "± 7224",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 41,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 78,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 243,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 149,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6130,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 169,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4464,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 22201,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 12,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 239,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 22,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 201,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12222,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 126620,
            "range": "± 10600",
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
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 35,
            "range": "± 3",
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
            "value": 33,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5580,
            "range": "± 373",
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
            "value": 31938,
            "range": "± 2952",
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
            "value": 35,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 566278,
            "range": "± 36621",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1143071,
            "range": "± 96308",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1914545,
            "range": "± 114881",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 138071,
            "range": "± 4196",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 264131,
            "range": "± 6784",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 716046,
            "range": "± 16521",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 78737579,
            "range": "± 1842017",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 78986311,
            "range": "± 2614548",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 77422445,
            "range": "± 2516315",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 441,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 916,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2880,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 240,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 383,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 16488,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 136662,
            "range": "± 3912",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 283438,
            "range": "± 10383",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 662914,
            "range": "± 21864",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 76505608,
            "range": "± 2276674",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 76071380,
            "range": "± 3634447",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 77145015,
            "range": "± 3488341",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 9034,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 18238,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 44305,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4831035,
            "range": "± 158874",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4803131,
            "range": "± 155634",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4915274,
            "range": "± 140561",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 5951,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 11520,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 21166,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1854655,
            "range": "± 42658",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1924933,
            "range": "± 40808",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1983761,
            "range": "± 73427",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 53646307536,
            "range": "± 538735652",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 495470670,
            "range": "± 12886654",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 31209364901,
            "range": "± 443281647",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8504082413,
            "range": "± 171430461",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 333562939,
            "range": "± 9217030",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 297411259,
            "range": "± 6400446",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1466393250,
            "range": "± 25879693",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c3d213ac2fd025b61a9fe3442b95cedcf3c85f3",
          "message": "Merge pull request #1632 from AleoHQ/rm/prepared-verifier-key\n\nRemoves `PreparedVerifierKey` from `polycommit`",
          "timestamp": "2023-06-07T14:26:35-07:00",
          "tree_id": "02e7b7d71aae00b4407470770b16ef265d987bb2",
          "url": "https://github.com/catnodes/snarkVM/commit/8c3d213ac2fd025b61a9fe3442b95cedcf3c85f3"
        },
        "date": 1686221370005,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 117547093,
            "range": "± 9068744",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 844521917,
            "range": "± 19696439",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1533547604,
            "range": "± 21910450",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2363719744,
            "range": "± 22363129",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2938729262,
            "range": "± 24152556",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3315828202,
            "range": "± 28083140",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 6079498815,
            "range": "± 38545580",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 10906203236,
            "range": "± 85671212",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 76825945,
            "range": "± 2276091",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 567940320,
            "range": "± 17399311",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 5569085402,
            "range": "± 100961477",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 104646,
            "range": "± 2959",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 257358,
            "range": "± 7549",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1862163760,
            "range": "± 16678623",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 109695484,
            "range": "± 1379491",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 676338780,
            "range": "± 7222382",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 11099348405,
            "range": "± 84013852",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 9029,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 9800,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 31705173,
            "range": "± 813047",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 15118810,
            "range": "± 368327",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 24114599,
            "range": "± 678346",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 6366512,
            "range": "± 94288",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 8049305,
            "range": "± 140158",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 21520637,
            "range": "± 318441",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 177904194,
            "range": "± 2160183",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1069861269,
            "range": "± 48873325",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7977799,
            "range": "± 253948",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9554853,
            "range": "± 519376",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 35664778,
            "range": "± 2067791",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 282360622,
            "range": "± 7672101",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 12093458,
            "range": "± 299428",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 406632,
            "range": "± 9806",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 992263455,
            "range": "± 14276320",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 103642,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 199946,
            "range": "± 8945",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 273547,
            "range": "± 8632",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 75769,
            "range": "± 2428",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 77001,
            "range": "± 2979",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 154528,
            "range": "± 9062",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 181109,
            "range": "± 9470",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 227771,
            "range": "± 10026",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 87166,
            "range": "± 3683",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 84894,
            "range": "± 3369",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 171350,
            "range": "± 6416",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 169255,
            "range": "± 5394",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 216588,
            "range": "± 17904",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 185991,
            "range": "± 9500",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 181413,
            "range": "± 7970",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 271638,
            "range": "± 9908",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 276697,
            "range": "± 9763",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 274110,
            "range": "± 10216",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3804161,
            "range": "± 69227",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5653705,
            "range": "± 91418",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 24375444,
            "range": "± 542116",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 114938574,
            "range": "± 2495470",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1390953841,
            "range": "± 42607244",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11692154872,
            "range": "± 151791532",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3841258,
            "range": "± 91294",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5752763,
            "range": "± 85504",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 25321465,
            "range": "± 329689",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 110454202,
            "range": "± 2471854",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1385149935,
            "range": "± 20756533",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 12313977499,
            "range": "± 292362407",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3854193,
            "range": "± 79691",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6746158,
            "range": "± 105724",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 25510484,
            "range": "± 800805",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 114856755,
            "range": "± 3142588",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1384438141,
            "range": "± 26073892",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 11862539658,
            "range": "± 177371960",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3850966,
            "range": "± 156057",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5278389,
            "range": "± 88970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 28961658,
            "range": "± 637528",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 168512875,
            "range": "± 3078537",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1369148948,
            "range": "± 27060537",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11795189379,
            "range": "± 142017122",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3995756,
            "range": "± 119825",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5483150,
            "range": "± 102950",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 77826481,
            "range": "± 1438771",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 115564910,
            "range": "± 3091682",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1360382115,
            "range": "± 24830735",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 12086025137,
            "range": "± 266363133",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4212411,
            "range": "± 373042",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5603101,
            "range": "± 116706",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 22975890,
            "range": "± 696474",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 116694025,
            "range": "± 1668800",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1772456461,
            "range": "± 40843412",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11220511131,
            "range": "± 119332764",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 6744602,
            "range": "± 697473",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 8295873,
            "range": "± 460701",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 27057283,
            "range": "± 721330",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 123129533,
            "range": "± 4026154",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1042327493,
            "range": "± 31314269",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13824713725,
            "range": "± 119433346",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3714957,
            "range": "± 53361",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 37150755,
            "range": "± 739301",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 366256279,
            "range": "± 5144936",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3666669470,
            "range": "± 50463426",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 37838638327,
            "range": "± 350747843",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3726829,
            "range": "± 78588",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 38207443,
            "range": "± 894963",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 391862069,
            "range": "± 6006078",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3806820645,
            "range": "± 20160717",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 37772514476,
            "range": "± 314150520",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3726081,
            "range": "± 81145",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 36944413,
            "range": "± 857649",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 372699311,
            "range": "± 7465547",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3671150871,
            "range": "± 33799928",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 37024329748,
            "range": "± 285610970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3668542,
            "range": "± 67533",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 36702028,
            "range": "± 726536",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 368461775,
            "range": "± 9307310",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3839393635,
            "range": "± 82860267",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 37498626081,
            "range": "± 478986611",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3863115,
            "range": "± 97188",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 39448620,
            "range": "± 783734",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 387757477,
            "range": "± 9324969",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3897719206,
            "range": "± 89685638",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 38999808096,
            "range": "± 370656498",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 6010937,
            "range": "± 212441",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 48697559,
            "range": "± 995532",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 504588845,
            "range": "± 11659474",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 5059428248,
            "range": "± 57531446",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 49768600905,
            "range": "± 406702475",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3805589,
            "range": "± 66346",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3804483,
            "range": "± 43161",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3764244,
            "range": "± 32163",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3767247,
            "range": "± 56902",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3797183,
            "range": "± 126381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3785447,
            "range": "± 66238",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5345848,
            "range": "± 124669",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5370404,
            "range": "± 174384",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5308640,
            "range": "± 101299",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5298123,
            "range": "± 110697",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3681138,
            "range": "± 98293",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5569786,
            "range": "± 92264",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 21893039,
            "range": "± 231725",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 22128685,
            "range": "± 688078",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 22177034,
            "range": "± 592276",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3692811,
            "range": "± 79979",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5456891,
            "range": "± 146484",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 22147898,
            "range": "± 520277",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 113944871,
            "range": "± 4183498",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 114138143,
            "range": "± 3818347",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3721814,
            "range": "± 114544",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5871676,
            "range": "± 137344",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 26277034,
            "range": "± 727979",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 134783941,
            "range": "± 2334745",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8632",
            "value": 1006457437,
            "range": "± 16674970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4233007,
            "range": "± 93390",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 8393276,
            "range": "± 260088",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 48227564,
            "range": "± 1217852",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 249972518,
            "range": "± 3482830",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2318886433,
            "range": "± 19990674",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3999271,
            "range": "± 71787",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3962855,
            "range": "± 95775",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3916730,
            "range": "± 49765",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3895202,
            "range": "± 90720",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3919344,
            "range": "± 128622",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3943569,
            "range": "± 54668",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3988442,
            "range": "± 57922",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3981906,
            "range": "± 77674",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3983471,
            "range": "± 60075",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3982329,
            "range": "± 88781",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 4028383,
            "range": "± 72908",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3956724,
            "range": "± 82625",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3961460,
            "range": "± 95526",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3896103,
            "range": "± 78839",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3867319,
            "range": "± 102179",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3934250,
            "range": "± 59446",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3954778,
            "range": "± 65627",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3999170,
            "range": "± 33584",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3982371,
            "range": "± 115676",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 4064445,
            "range": "± 54106",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3976593,
            "range": "± 38820",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3964512,
            "range": "± 68990",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 4040712,
            "range": "± 95321",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3986373,
            "range": "± 80983",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 4107928,
            "range": "± 78659",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3942907,
            "range": "± 77340",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 4126465,
            "range": "± 125636",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 4038517,
            "range": "± 136451",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4434924,
            "range": "± 63063",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3957436,
            "range": "± 106415",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4819452,
            "range": "± 144241",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 4020198,
            "range": "± 72672",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 201421,
            "range": "± 19750",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 216754,
            "range": "± 15961",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1165,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 848,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 548,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 91721,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1914366,
            "range": "± 57368",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 570237,
            "range": "± 35559",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4439,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 3148,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 2020,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 8,
            "range": "± 0",
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
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 62,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11692,
            "range": "± 557",
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
            "value": 84652,
            "range": "± 2609",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 44,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 87,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 259,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 152,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 7196,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 189,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4660,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 24321,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 268,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 209,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12974,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 140002,
            "range": "± 10507",
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
            "value": 9,
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
            "value": 36,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6203,
            "range": "± 455",
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
            "value": 34819,
            "range": "± 2282",
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
            "value": 39,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 615696,
            "range": "± 19389",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1252966,
            "range": "± 50060",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 2101857,
            "range": "± 102279",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 138410,
            "range": "± 2613",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 269721,
            "range": "± 5040",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 687395,
            "range": "± 14764",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 78474777,
            "range": "± 1598976",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 76260218,
            "range": "± 1188699",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 79580878,
            "range": "± 1095466",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 453,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 923,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2945,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 255,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 436,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 16417,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 132631,
            "range": "± 3694",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 257320,
            "range": "± 3981",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 691742,
            "range": "± 14871",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 74479305,
            "range": "± 954896",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 72306883,
            "range": "± 1180130",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 76552834,
            "range": "± 1081442",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 8160,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 16569,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 42299,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4600605,
            "range": "± 110480",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4882338,
            "range": "± 119288",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4788614,
            "range": "± 142439",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 5474,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 11020,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 19620,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1750708,
            "range": "± 35250",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1798303,
            "range": "± 48480",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1872404,
            "range": "± 31607",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 53074411248,
            "range": "± 1202233565",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 478188169,
            "range": "± 12987624",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 30804381421,
            "range": "± 335624721",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8859114675,
            "range": "± 95314169",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 344964880,
            "range": "± 6829267",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 305458150,
            "range": "± 6369865",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1491171362,
            "range": "± 42395919",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc091b7228e4cc55866bf9aa9522375b0484975d",
          "message": "Merge pull request #1643 from AleoHQ/feat/get-or-use\n\n[Feature] `get.or_use`",
          "timestamp": "2023-06-08T22:04:12-07:00",
          "tree_id": "8a04ca8e0948e97295eb037a0d5c86312fcaa622",
          "url": "https://github.com/catnodes/snarkVM/commit/dc091b7228e4cc55866bf9aa9522375b0484975d"
        },
        "date": 1686338422394,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 90405104,
            "range": "± 2025990",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 637494760,
            "range": "± 18765644",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1167930984,
            "range": "± 2872867",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1794358502,
            "range": "± 7852373",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2269270240,
            "range": "± 2525038",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2564177641,
            "range": "± 6637437",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4716758425,
            "range": "± 11280625",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8456450725,
            "range": "± 13044210",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 58741378,
            "range": "± 213194",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 442528145,
            "range": "± 2577989",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 3996001351,
            "range": "± 67887124",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 81101,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 203146,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1400326695,
            "range": "± 2933480",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 85882781,
            "range": "± 629698",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 529242037,
            "range": "± 4962197",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8782859407,
            "range": "± 92335506",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 6884,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 7107,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 24740372,
            "range": "± 446574",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 11705066,
            "range": "± 8663",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 18702362,
            "range": "± 407413",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 5050356,
            "range": "± 4562",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6306492,
            "range": "± 13702",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16685785,
            "range": "± 47489",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 138384631,
            "range": "± 865453",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 846722831,
            "range": "± 4534393",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6570898,
            "range": "± 37354",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8057350,
            "range": "± 59474",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 30732489,
            "range": "± 1122670",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 238148923,
            "range": "± 9034232",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 6621318,
            "range": "± 12971",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 433327,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 772753870,
            "range": "± 2530786",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 93157,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 177509,
            "range": "± 3888",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 226074,
            "range": "± 4553",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 71801,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 71816,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 143950,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 167822,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 215912,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 84647,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 84642,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 169138,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 168982,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 211796,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 188863,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 189085,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 284432,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 284515,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 284605,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3356318,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5074401,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 21885989,
            "range": "± 24781",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 97812203,
            "range": "± 2545285",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1178467638,
            "range": "± 6133348",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 10031717758,
            "range": "± 18325911",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3296751,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5025871,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 21959733,
            "range": "± 74065",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 95023948,
            "range": "± 261920",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1183303400,
            "range": "± 5235772",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 10097976518,
            "range": "± 32222576",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3298870,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5700561,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21190325,
            "range": "± 63469",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 99293084,
            "range": "± 3202380",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1183706014,
            "range": "± 4768435",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10098573053,
            "range": "± 21125109",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3291926,
            "range": "± 1341",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4628895,
            "range": "± 2863",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 24819109,
            "range": "± 86099",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 142393804,
            "range": "± 868902",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1181285868,
            "range": "± 4240662",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 10100492322,
            "range": "± 25899830",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3316505,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4741957,
            "range": "± 6098",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 67076269,
            "range": "± 201020",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 99312066,
            "range": "± 2097637",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1139753616,
            "range": "± 5628162",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 10055644254,
            "range": "± 16291446",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3506003,
            "range": "± 4494",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4851725,
            "range": "± 12082",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19899542,
            "range": "± 133818",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 101669693,
            "range": "± 3533999",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1507242909,
            "range": "± 16330879",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9648641375,
            "range": "± 71763126",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5684371,
            "range": "± 764116",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7154270,
            "range": "± 850240",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 23823348,
            "range": "± 683769",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 103742757,
            "range": "± 2006262",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 881035933,
            "range": "± 9577889",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11753752305,
            "range": "± 56270108",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3276638,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 32781684,
            "range": "± 2967044",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 389492931,
            "range": "± 58758",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3895714234,
            "range": "± 279074",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38950828922,
            "range": "± 5326322",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3274109,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 32791746,
            "range": "± 2969822",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 389639336,
            "range": "± 53433",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3895628511,
            "range": "± 358256",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38957904650,
            "range": "± 6807942",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3278921,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 32808111,
            "range": "± 2976185",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 389716328,
            "range": "± 68411",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3896432372,
            "range": "± 6456265",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 38971080129,
            "range": "± 2229381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3283917,
            "range": "± 1730",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 32840105,
            "range": "± 2974043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 390092657,
            "range": "± 446152",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3902081924,
            "range": "± 364260",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 39033851828,
            "range": "± 8138057",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3437213,
            "range": "± 7488",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 34253454,
            "range": "± 3046545",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 404872991,
            "range": "± 1158770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4044856049,
            "range": "± 2040893",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 40492433727,
            "range": "± 168165050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4981481,
            "range": "± 158897",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 43677883,
            "range": "± 3148038",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 492032411,
            "range": "± 7979156",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4983723656,
            "range": "± 33265966",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 50424695537,
            "range": "± 373277474",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3269654,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3269326,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3267272,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3266681,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3267346,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3263278,
            "range": "± 2053",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4590843,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4589630,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4588681,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4593290,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3258448,
            "range": "± 1858",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4786121,
            "range": "± 7181",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 19424169,
            "range": "± 800318",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 19501557,
            "range": "± 1378243",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 19476683,
            "range": "± 785385",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3260610,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4784444,
            "range": "± 1290",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 19459518,
            "range": "± 815871",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 101446024,
            "range": "± 2614070",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 101180588,
            "range": "± 1942827",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3293425,
            "range": "± 5248",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4736810,
            "range": "± 5935",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 21265260,
            "range": "± 972109",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 111579829,
            "range": "± 1748365",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8610",
            "value": 811023105,
            "range": "± 3558690",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3412352,
            "range": "± 38186",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 6653124,
            "range": "± 248111",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 37995759,
            "range": "± 2597101",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 199948767,
            "range": "± 1818948",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1821633847,
            "range": "± 5418374",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3364155,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3253138,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3361896,
            "range": "± 1110",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3253488,
            "range": "± 5124",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3362318,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3254911,
            "range": "± 1879",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3357836,
            "range": "± 3773",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3250854,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3355894,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3254387,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3361139,
            "range": "± 3303",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3255609,
            "range": "± 1709",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3361442,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3259875,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3361649,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3257143,
            "range": "± 2214",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3361452,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3253068,
            "range": "± 5974",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3366772,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3255057,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3374751,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3257234,
            "range": "± 1148",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3389676,
            "range": "± 2719",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3256178,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3437616,
            "range": "± 4388",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3257472,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3534015,
            "range": "± 13306",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3256528,
            "range": "± 2905",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3813592,
            "range": "± 52043",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3264568,
            "range": "± 12080",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4348789,
            "range": "± 110011",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3286208,
            "range": "± 24524",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 158764,
            "range": "± 3137",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 172878,
            "range": "± 4484",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 931,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 683,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 74051,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1514663,
            "range": "± 6025",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 412133,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3539,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2518,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1597,
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
            "value": 11,
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
            "value": 14,
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
            "value": 58,
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
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10765,
            "range": "± 32",
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
            "value": 67692,
            "range": "± 178",
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
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5349,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3649,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 20146,
            "range": "± 14",
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
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 213,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 169,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11341,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 112902,
            "range": "± 6449",
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
            "value": 9,
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
            "value": 30,
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
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5821,
            "range": "± 16",
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
            "value": 28069,
            "range": "± 73",
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
            "value": 492649,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1000361,
            "range": "± 3206",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1690152,
            "range": "± 6161",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 116088,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 231110,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 576522,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 67823107,
            "range": "± 110924",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 68252450,
            "range": "± 111371",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 70785063,
            "range": "± 80751",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 772,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3411,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 211,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 331,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 23432,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 112850,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 225110,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 576550,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 65236254,
            "range": "± 96441",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 65064818,
            "range": "± 150487",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 67468484,
            "range": "± 146656",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7630,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 15542,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 36265,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 3895559,
            "range": "± 11015",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 3907275,
            "range": "± 5089",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4042142,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4756,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9531,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 16715,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1399306,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1410928,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1496974,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 44432154434,
            "range": "± 111168768",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 438428457,
            "range": "± 1420636",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 24517589553,
            "range": "± 80763877",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7178837365,
            "range": "± 46597495",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 282550700,
            "range": "± 3414178",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 243794156,
            "range": "± 2012773",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1200537345,
            "range": "± 8421500",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31efbd7f97a7f0527cf3c0aa22735ed3035cb8a4",
          "message": "Merge pull request #1590 from AleoHQ/update/num_nonzeros\n\nAdds sanity check on function sizes",
          "timestamp": "2023-06-09T08:20:39-07:00",
          "tree_id": "c98f9d9a3b895ffb485ba7a57d384d932cecde9b",
          "url": "https://github.com/catnodes/snarkVM/commit/31efbd7f97a7f0527cf3c0aa22735ed3035cb8a4"
        },
        "date": 1686374748936,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 119456569,
            "range": "± 4854441",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 816314188,
            "range": "± 16392596",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1517612822,
            "range": "± 38105595",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2368752587,
            "range": "± 36933793",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2959558745,
            "range": "± 29219637",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3368735349,
            "range": "± 39396751",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 6162683656,
            "range": "± 39090702",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 11115119708,
            "range": "± 109467374",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 67857677,
            "range": "± 1693552",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 483048914,
            "range": "± 7672093",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4101055794,
            "range": "± 64574606",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 101874,
            "range": "± 5054",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 248174,
            "range": "± 5323",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1568423757,
            "range": "± 22972783",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 106312582,
            "range": "± 907328",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 671752248,
            "range": "± 13442130",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 11027955702,
            "range": "± 111548769",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 8396,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 8505,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 31813410,
            "range": "± 1611152",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 14588160,
            "range": "± 156715",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 23236422,
            "range": "± 1002287",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 6356426,
            "range": "± 49159",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 8199925,
            "range": "± 290070",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 21739187,
            "range": "± 1454556",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 179489492,
            "range": "± 2585058",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1068654366,
            "range": "± 22677526",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7811904,
            "range": "± 210903",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9302281,
            "range": "± 177744",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 32384812,
            "range": "± 1247666",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 254176072,
            "range": "± 5469802",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 9516983,
            "range": "± 118427",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 358943,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 895823276,
            "range": "± 14261149",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 102574,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 199317,
            "range": "± 12670",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 250283,
            "range": "± 11257",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 78143,
            "range": "± 1793",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 78225,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 155874,
            "range": "± 2758",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 183063,
            "range": "± 6632",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 235240,
            "range": "± 11430",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 87328,
            "range": "± 2336",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 89962,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 166998,
            "range": "± 2549",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 167059,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 208590,
            "range": "± 3623",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 180394,
            "range": "± 2397",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 182804,
            "range": "± 5394",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 272787,
            "range": "± 8031",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 274766,
            "range": "± 6275",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 275608,
            "range": "± 7170",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3583448,
            "range": "± 55327",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5431779,
            "range": "± 112838",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 23553980,
            "range": "± 304869",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 109144165,
            "range": "± 3727378",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1282799546,
            "range": "± 10636117",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11004073486,
            "range": "± 104939432",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3479064,
            "range": "± 45682",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5316236,
            "range": "± 200367",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 23427206,
            "range": "± 347227",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 104205516,
            "range": "± 2217776",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1312977722,
            "range": "± 21154236",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 11012643732,
            "range": "± 85675546",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3507280,
            "range": "± 36586",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6110965,
            "range": "± 66214",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 22459363,
            "range": "± 295779",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 105287382,
            "range": "± 3150061",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1298733764,
            "range": "± 20062463",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10987248964,
            "range": "± 81007140",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3512689,
            "range": "± 44924",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4900566,
            "range": "± 88084",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 26133345,
            "range": "± 161245",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 152073071,
            "range": "± 2450837",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1290513913,
            "range": "± 17966394",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11032465626,
            "range": "± 72625713",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3518063,
            "range": "± 62254",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5009338,
            "range": "± 45725",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 71692749,
            "range": "± 1045816",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 106851643,
            "range": "± 2732224",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1233708761,
            "range": "± 11165756",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 10998406925,
            "range": "± 115771606",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3640051,
            "range": "± 96377",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5158831,
            "range": "± 168405",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 20878461,
            "range": "± 479213",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 105812803,
            "range": "± 4341900",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1632481755,
            "range": "± 27373854",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 10438592425,
            "range": "± 54899015",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5355855,
            "range": "± 224277",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 6765917,
            "range": "± 234566",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 23501400,
            "range": "± 695047",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 108713154,
            "range": "± 2669748",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 964900336,
            "range": "± 17542289",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 12721445246,
            "range": "± 123611202",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3893191,
            "range": "± 39381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 39153040,
            "range": "± 2544593",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 346318938,
            "range": "± 3576255",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3488775693,
            "range": "± 26627512",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 34819258178,
            "range": "± 83521946",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3899895,
            "range": "± 53426",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 39065243,
            "range": "± 2061098",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 348405873,
            "range": "± 4064405",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3468550363,
            "range": "± 17754419",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 34824286188,
            "range": "± 165414753",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3892141,
            "range": "± 133755",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 38748546,
            "range": "± 2057174",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 346923706,
            "range": "± 3533828",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3507200209,
            "range": "± 27821941",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 35034901712,
            "range": "± 220963770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3897537,
            "range": "± 24009",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 39250685,
            "range": "± 2196523",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 352674715,
            "range": "± 7736504",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3490451101,
            "range": "± 17840624",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 35003354230,
            "range": "± 111096269",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 4018036,
            "range": "± 37570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 40092616,
            "range": "± 2245484",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 362386116,
            "range": "± 4757554",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3623772862,
            "range": "± 16049134",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 36315772293,
            "range": "± 115652629",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5544333,
            "range": "± 138366",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 48026916,
            "range": "± 2149219",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 455317899,
            "range": "± 5394746",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4578813762,
            "range": "± 28617431",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 46243540232,
            "range": "± 156130700",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3580019,
            "range": "± 28865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3548691,
            "range": "± 83874",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3559972,
            "range": "± 51050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3567052,
            "range": "± 61983",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3568840,
            "range": "± 49400",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3598352,
            "range": "± 34306",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5082212,
            "range": "± 135453",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5119370,
            "range": "± 90198",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5054358,
            "range": "± 53111",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5065354,
            "range": "± 255439",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3617150,
            "range": "± 31328",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5280397,
            "range": "± 126007",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 21778250,
            "range": "± 719207",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 21440079,
            "range": "± 577951",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 21636429,
            "range": "± 567784",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3667312,
            "range": "± 47231",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5366352,
            "range": "± 112355",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 21455348,
            "range": "± 526622",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 103299878,
            "range": "± 5253589",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 103587164,
            "range": "± 1978053",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3688163,
            "range": "± 52056",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5241653,
            "range": "± 69343",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 23172740,
            "range": "± 410134",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 115165928,
            "range": "± 3255013",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8676",
            "value": 893281022,
            "range": "± 18539570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3754145,
            "range": "± 108561",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7402924,
            "range": "± 209026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 43263706,
            "range": "± 1676580",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 219701721,
            "range": "± 4180066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1978273802,
            "range": "± 20222779",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3482246,
            "range": "± 39291",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3477789,
            "range": "± 69538",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3554419,
            "range": "± 70131",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3509201,
            "range": "± 62302",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3491281,
            "range": "± 36412",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3486204,
            "range": "± 29200",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3461046,
            "range": "± 42804",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3521184,
            "range": "± 72887",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3510869,
            "range": "± 50357",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3495264,
            "range": "± 55625",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3516963,
            "range": "± 61633",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3583014,
            "range": "± 81915",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3544834,
            "range": "± 124396",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3558193,
            "range": "± 45486",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3477080,
            "range": "± 46683",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3549936,
            "range": "± 125146",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3519441,
            "range": "± 67827",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3515141,
            "range": "± 65608",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3494646,
            "range": "± 27278",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3553213,
            "range": "± 58789",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3541378,
            "range": "± 65635",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3553010,
            "range": "± 46297",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3533826,
            "range": "± 57987",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3539322,
            "range": "± 79681",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3548621,
            "range": "± 44942",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3577827,
            "range": "± 62171",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3641784,
            "range": "± 116330",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3587371,
            "range": "± 96583",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3916164,
            "range": "± 91422",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3545069,
            "range": "± 40484",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4117391,
            "range": "± 128120",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3614467,
            "range": "± 80938",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 203399,
            "range": "± 13916",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 202123,
            "range": "± 7719",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1254,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 906,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 568,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 94214,
            "range": "± 2178",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1858830,
            "range": "± 52185",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 539651,
            "range": "± 30169",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4240,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 3023,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 2021,
            "range": "± 80",
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
            "value": 11,
            "range": "± 1",
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
            "value": 15,
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
            "value": 65,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 57,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10090,
            "range": "± 618",
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
            "value": 84696,
            "range": "± 3535",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 39,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 72,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 221,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 131,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5848,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 154,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4021,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 21809,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 237,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 217,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11267,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 144742,
            "range": "± 10564",
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
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 32,
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
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5268,
            "range": "± 115",
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
            "value": 30921,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 35,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 557960,
            "range": "± 24930",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1103195,
            "range": "± 26792",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1911999,
            "range": "± 59154",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 122833,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 245719,
            "range": "± 5281",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 652847,
            "range": "± 8769",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 78437260,
            "range": "± 488793",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 83174692,
            "range": "± 1520798",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 83365010,
            "range": "± 1547109",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 390,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 794,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3728,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 252,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 377,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 23562,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 121876,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 245164,
            "range": "± 3383",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 645143,
            "range": "± 10695",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 75496183,
            "range": "± 2073717",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 75780165,
            "range": "± 814082",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 78007662,
            "range": "± 1031196",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7691,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 15445,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 40847,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4590020,
            "range": "± 51720",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4520170,
            "range": "± 61306",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4669023,
            "range": "± 36028",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4932,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9794,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 18144,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1529684,
            "range": "± 23241",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1530336,
            "range": "± 13028",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1643712,
            "range": "± 13938",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 55412047466,
            "range": "± 258099743",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 436988131,
            "range": "± 8416965",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 30201625251,
            "range": "± 214421040",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 9029055313,
            "range": "± 120219120",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 354255076,
            "range": "± 6321807",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 288393093,
            "range": "± 8186588",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1334569334,
            "range": "± 16565599",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5900cb0e1adf62b4b1b0008c989e8c151d6753c4",
          "message": "Merge pull request #1646 from AleoHQ/test/execute-nested-imports\n\n[Fix] Execute and verify nested function calls.",
          "timestamp": "2023-06-10T14:40:14-07:00",
          "tree_id": "36d01a027919925bceaac4c56962646e70dec4f5",
          "url": "https://github.com/catnodes/snarkVM/commit/5900cb0e1adf62b4b1b0008c989e8c151d6753c4"
        },
        "date": 1686452212879,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 90616737,
            "range": "± 1272557",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 634466235,
            "range": "± 29499969",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1159193672,
            "range": "± 6330343",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1789264000,
            "range": "± 13208979",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2271631509,
            "range": "± 3367630",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2556891344,
            "range": "± 9175231",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4694242092,
            "range": "± 12124922",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8436706601,
            "range": "± 11032609",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 58911867,
            "range": "± 421147",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 436652116,
            "range": "± 4925950",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 3936575161,
            "range": "± 115828074",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 79407,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 198662,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1399202967,
            "range": "± 4532945",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 80051719,
            "range": "± 354539",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 522690260,
            "range": "± 2796991",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8699763789,
            "range": "± 31224496",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1491,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1160,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1324697,
            "range": "± 7435",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 809343,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 446705,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 2308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6274649,
            "range": "± 22828",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16561413,
            "range": "± 342766",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 137689339,
            "range": "± 701431",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 839465608,
            "range": "± 6317461",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6546228,
            "range": "± 53292",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8054430,
            "range": "± 59744",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 29730969,
            "range": "± 1163915",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 236074082,
            "range": "± 2003339",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 6589683,
            "range": "± 7262",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 431988,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 769638063,
            "range": "± 2732788",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 90262,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 172741,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 221490,
            "range": "± 4410",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 66621,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 66822,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 133551,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 156109,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 200431,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 77835,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 77818,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 155533,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 155590,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 194758,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 172483,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 172740,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 260634,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 260398,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 260671,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3354873,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5063899,
            "range": "± 3735",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 21874393,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 98068134,
            "range": "± 3422664",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1182928820,
            "range": "± 8679135",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 9997115707,
            "range": "± 19966670",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3261750,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 4972656,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 21766719,
            "range": "± 13632",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 94929663,
            "range": "± 239944",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1181078612,
            "range": "± 3859265",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 10068992021,
            "range": "± 58086320",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3256996,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5645953,
            "range": "± 2499",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21012078,
            "range": "± 12336",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 99007732,
            "range": "± 2701511",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1183386865,
            "range": "± 7324949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10075064475,
            "range": "± 21896011",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3261891,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4574159,
            "range": "± 1745",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 24580130,
            "range": "± 15994",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 141469630,
            "range": "± 1167587",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1178558951,
            "range": "± 6951651",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 10078269433,
            "range": "± 22302956",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3265840,
            "range": "± 2030",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4681015,
            "range": "± 2836",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 66841685,
            "range": "± 406657",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 99754014,
            "range": "± 1475770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1127442515,
            "range": "± 2399496",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 10008441388,
            "range": "± 11708227",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3451412,
            "range": "± 6402",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4766113,
            "range": "± 12847",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19619659,
            "range": "± 51838",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 101175812,
            "range": "± 1275145",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1499306878,
            "range": "± 4137838",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9554863952,
            "range": "± 22318345",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5521652,
            "range": "± 670692",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7142103,
            "range": "± 902051",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 23727350,
            "range": "± 1008998",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 101357166,
            "range": "± 776084",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 866974932,
            "range": "± 5232949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11652928721,
            "range": "± 21989980",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3245839,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 32435272,
            "range": "± 8583",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 324275512,
            "range": "± 42359",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3244664260,
            "range": "± 1134184",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 32469089910,
            "range": "± 4315350",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3241635,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 32450162,
            "range": "± 5697",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 324658999,
            "range": "± 33999",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3246637338,
            "range": "± 388028",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 32469367755,
            "range": "± 6469968",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3247246,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 32469786,
            "range": "± 6015",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 324814261,
            "range": "± 49454",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3249019235,
            "range": "± 143760",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 32491534468,
            "range": "± 10549153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3254351,
            "range": "± 2074",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 32487579,
            "range": "± 24947",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 324971262,
            "range": "± 70045",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3254133993,
            "range": "± 789258",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 32537753745,
            "range": "± 6341661",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3395579,
            "range": "± 6327",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 33817266,
            "range": "± 57239",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 336936348,
            "range": "± 445111",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3377297364,
            "range": "± 1480681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 33776568805,
            "range": "± 13663642",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4791723,
            "range": "± 174987",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 42926217,
            "range": "± 627055",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 420874073,
            "range": "± 4123692",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4265294505,
            "range": "± 105233938",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 42886093968,
            "range": "± 372356518",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3256464,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3254879,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3256886,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3253757,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3255787,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3254616,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4579977,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4582825,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4582891,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4580660,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3258721,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4778519,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 19430410,
            "range": "± 99933",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 19424185,
            "range": "± 33108",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 19429552,
            "range": "± 32674",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3261007,
            "range": "± 1667",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4778199,
            "range": "± 2552",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 19424827,
            "range": "± 36203",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 98631118,
            "range": "± 3055815",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 98381578,
            "range": "± 2268549",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3292554,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4729022,
            "range": "± 3846",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 21600283,
            "range": "± 32932",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 109871986,
            "range": "± 1477589",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8689",
            "value": 806405541,
            "range": "± 6252768",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3423985,
            "range": "± 43409",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 6774082,
            "range": "± 54194",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 38735301,
            "range": "± 73249",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 203623281,
            "range": "± 3240244",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1804465328,
            "range": "± 5760785",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3260774,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3271134,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3258125,
            "range": "± 3820",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3269736,
            "range": "± 2352",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3260950,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3271220,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3256741,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3268999,
            "range": "± 906",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3263311,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3270855,
            "range": "± 3910",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3249970,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3267008,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3256590,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3266591,
            "range": "± 1639",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3261409,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3269733,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3263157,
            "range": "± 1437",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3270622,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3264920,
            "range": "± 1798",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3267907,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3259959,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3267848,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3290596,
            "range": "± 3723",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3269674,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3318504,
            "range": "± 3439",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3266149,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3407338,
            "range": "± 10150",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3270489,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3553848,
            "range": "± 14014",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3272882,
            "range": "± 3335",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3924320,
            "range": "± 54312",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3279623,
            "range": "± 23334",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 159308,
            "range": "± 3220",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 173442,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 931,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 684,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 74175,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1521614,
            "range": "± 10125",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 409042,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3536,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2516,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1608,
            "range": "± 6",
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
            "value": 11,
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
            "value": 14,
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
            "value": 58,
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
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10558,
            "range": "± 39",
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
            "value": 66777,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5254,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3636,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 19953,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 20,
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
            "value": 213,
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
            "value": 167,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11213,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 113713,
            "range": "± 4398",
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
            "value": 9,
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
            "value": 30,
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
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5713,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 28032,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 487716,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 987276,
            "range": "± 2142",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1687510,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 116580,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 224594,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 566678,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 67652143,
            "range": "± 124049",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 68042402,
            "range": "± 122375",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 70428300,
            "range": "± 87389",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 374,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 765,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 331,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 23082,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 112958,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 225486,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 564253,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 65066723,
            "range": "± 196474",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 65324580,
            "range": "± 86785",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 67584400,
            "range": "± 62565",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7190,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 14268,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 35721,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4175558,
            "range": "± 8342",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4201253,
            "range": "± 5559",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4329247,
            "range": "± 13111",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4616,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9336,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 16364,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1711314,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1712098,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1819921,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 44273603315,
            "range": "± 152551712",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 429657447,
            "range": "± 1866161",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 24408653955,
            "range": "± 81424301",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7100932129,
            "range": "± 14058807",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 273669653,
            "range": "± 1477637",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 240151914,
            "range": "± 1135604",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1185632306,
            "range": "± 5643584",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f790be58d456dd8bedc5ce2c6cb521bffa03dfd",
          "message": "Merge pull request #1636 from AleoHQ/feat/finalize-fees\n\n[Feature] Finalize Fees.",
          "timestamp": "2023-06-10T16:46:16-07:00",
          "tree_id": "2667a9953587f38013911ce36432ce481a4dd5f7",
          "url": "https://github.com/catnodes/snarkVM/commit/1f790be58d456dd8bedc5ce2c6cb521bffa03dfd"
        },
        "date": 1686496430769,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 90649666,
            "range": "± 3614305",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 636209864,
            "range": "± 6887527",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1166571691,
            "range": "± 1409809",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1800604285,
            "range": "± 2348306",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2285410289,
            "range": "± 7464241",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2570478165,
            "range": "± 6956398",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4733269860,
            "range": "± 10142614",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8459196420,
            "range": "± 17107859",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 58782845,
            "range": "± 46902",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 437385256,
            "range": "± 1085135",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 3935462898,
            "range": "± 22205124",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 81138,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 203406,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1419910785,
            "range": "± 5243085",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 80940197,
            "range": "± 619790",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 525286635,
            "range": "± 3046679",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8739734576,
            "range": "± 37182613",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1457,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1150,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1331161,
            "range": "± 7259",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 809777,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 449708,
            "range": "± 6669",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 2349,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6320993,
            "range": "± 33506",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16680724,
            "range": "± 60000",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 139150509,
            "range": "± 1603176",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 846898431,
            "range": "± 5809275",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6584751,
            "range": "± 64025",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8072107,
            "range": "± 73171",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 30860050,
            "range": "± 1032078",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 241326765,
            "range": "± 3259451",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 6609692,
            "range": "± 10444",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 433230,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 780003575,
            "range": "± 2031421",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 92019,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 179619,
            "range": "± 4118",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 228031,
            "range": "± 5424",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 72523,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 72032,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 144735,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 167455,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 215906,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 84394,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 84496,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 169191,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 169123,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 211720,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 189176,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 189200,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 284169,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 284043,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 284100,
            "range": "± 2919",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3358598,
            "range": "± 4197",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5080459,
            "range": "± 3492",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 21987896,
            "range": "± 15569",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 100604269,
            "range": "± 2456391",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1203272917,
            "range": "± 3341218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 10252959568,
            "range": "± 58380728",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3251333,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 4972915,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 21724739,
            "range": "± 12530",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 99960158,
            "range": "± 3836949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1214991664,
            "range": "± 11322902",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 10240519281,
            "range": "± 22683883",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3261969,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5645717,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21030299,
            "range": "± 6458",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 100088249,
            "range": "± 2668246",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1198768106,
            "range": "± 6332161",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10236676471,
            "range": "± 30197045",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3262981,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4577102,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 24609331,
            "range": "± 4025",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 145709923,
            "range": "± 3872781",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1193518118,
            "range": "± 3514573",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 10225206701,
            "range": "± 15481216",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3267169,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4685848,
            "range": "± 3148",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 67539313,
            "range": "± 321260",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 100797100,
            "range": "± 2613563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1149911809,
            "range": "± 6946514",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 10166551982,
            "range": "± 37008034",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3496408,
            "range": "± 5262",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4846106,
            "range": "± 18981",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19844929,
            "range": "± 31218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 102551436,
            "range": "± 1950118",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1520126669,
            "range": "± 4296613",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9733874640,
            "range": "± 19616178",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5869856,
            "range": "± 697031",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7499998,
            "range": "± 879528",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 23831595,
            "range": "± 773838",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 107378470,
            "range": "± 4604271",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 883882000,
            "range": "± 8074050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11840698536,
            "range": "± 25398275",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3273212,
            "range": "± 1700",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 32748644,
            "range": "± 421707",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 336428215,
            "range": "± 81839",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3362256299,
            "range": "± 399677",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 33628700014,
            "range": "± 10713940",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3273151,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 32729419,
            "range": "± 422153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 335998951,
            "range": "± 68982",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3361133727,
            "range": "± 938566",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 33622455731,
            "range": "± 9452570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3274118,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 32749050,
            "range": "± 425397",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 336039116,
            "range": "± 436415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3362284443,
            "range": "± 203210",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 33628715649,
            "range": "± 4454706",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3279627,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 32781555,
            "range": "± 416409",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 336689760,
            "range": "± 36411",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3366774811,
            "range": "± 172217",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 33691103960,
            "range": "± 17078340",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3419050,
            "range": "± 4872",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 34153973,
            "range": "± 427303",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 350492780,
            "range": "± 582919",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3497539681,
            "range": "± 1462306",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 35047312436,
            "range": "± 46051116",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4807907,
            "range": "± 113656",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 43421612,
            "range": "± 563627",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 436739436,
            "range": "± 2065987",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4441061180,
            "range": "± 112356230",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 44034605717,
            "range": "± 472565096",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3266650,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3268184,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3267036,
            "range": "± 1779",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3268763,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3268057,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3264313,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4584065,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4582400,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4581550,
            "range": "± 1629",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4583078,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3257681,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4779397,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 19384806,
            "range": "± 73387",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 19376627,
            "range": "± 74040",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 19382304,
            "range": "± 75691",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3263701,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4777808,
            "range": "± 2406",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 19384822,
            "range": "± 73778",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 101460266,
            "range": "± 1855806",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 100735345,
            "range": "± 2942381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3296898,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4625212,
            "range": "± 3597",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 20765997,
            "range": "± 116234",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 107132100,
            "range": "± 1661403",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8627",
            "value": 813009080,
            "range": "± 4426807",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3333840,
            "range": "± 12842",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7676475,
            "range": "± 55431",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 40143642,
            "range": "± 307370",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 203398997,
            "range": "± 1615710",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1812924015,
            "range": "± 7342730",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3259247,
            "range": "± 1967",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3253469,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3258492,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3254939,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3258735,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3254048,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3257993,
            "range": "± 2443",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3253067,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3255745,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3255051,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3261808,
            "range": "± 29775",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3257496,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3263014,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3260234,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3260470,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3256166,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3262850,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3255793,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3266213,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3258011,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3270295,
            "range": "± 1812",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3256575,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3284984,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3257812,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3325344,
            "range": "± 12278",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3250894,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3411869,
            "range": "± 5163",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3257746,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3574647,
            "range": "± 8120",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3267979,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3933523,
            "range": "± 24924",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3270854,
            "range": "± 5407",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 159036,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 179792,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 931,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 683,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 74143,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1503202,
            "range": "± 9702",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 409271,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3543,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2520,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1597,
            "range": "± 5",
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
            "value": 11,
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
            "value": 14,
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
            "value": 58,
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
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 10788,
            "range": "± 37",
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
            "value": 67743,
            "range": "± 59",
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
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 121,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5235,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3634,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 20147,
            "range": "± 20",
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
            "value": 212,
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
            "value": 168,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 11364,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 114113,
            "range": "± 7516",
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
            "value": 30,
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
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5818,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 28030,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 486978,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 982001,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1690709,
            "range": "± 3598",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 120594,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 225689,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 579780,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 68252970,
            "range": "± 38878",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 68013310,
            "range": "± 46565",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 70582530,
            "range": "± 65900",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 787,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3513,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 207,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 348,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 23541,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 114848,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 234222,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 572222,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 65595252,
            "range": "± 110158",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 65636907,
            "range": "± 340058",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 67760074,
            "range": "± 103657",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7355,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 14712,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 36464,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4196037,
            "range": "± 5086",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4195222,
            "range": "± 5925",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4344962,
            "range": "± 18984",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4749,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9481,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 17040,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1720028,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1717024,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1815035,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 44903627125,
            "range": "± 155925532",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 435540322,
            "range": "± 2149445",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 24539995994,
            "range": "± 80467200",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7164148460,
            "range": "± 48017471",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 278853927,
            "range": "± 856280",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 242341114,
            "range": "± 943427",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1200627355,
            "range": "± 6178137",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "342b970a4b1e7e4b05612aadefa6eb45a48f234d",
          "message": "Merge pull request #1656 from AleoHQ/feat/commit-update\n\nUpdates commit instructions to include destination type",
          "timestamp": "2023-06-12T10:28:51-07:00",
          "tree_id": "099de307aa25fcc79a003d52c0d89456ceb5b3c4",
          "url": "https://github.com/catnodes/snarkVM/commit/342b970a4b1e7e4b05612aadefa6eb45a48f234d"
        },
        "date": 1686619807207,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 114038167,
            "range": "± 7144395",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 810251959,
            "range": "± 17213075",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1471013503,
            "range": "± 27456291",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2211540270,
            "range": "± 48046809",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2844725915,
            "range": "± 67335926",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3277450714,
            "range": "± 51682564",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5848557138,
            "range": "± 90383553",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 10580054083,
            "range": "± 150416593",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 78457817,
            "range": "± 1849449",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 568031886,
            "range": "± 38729869",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 5127415301,
            "range": "± 180856217",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 101808,
            "range": "± 7949",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 250394,
            "range": "± 7016",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1840703067,
            "range": "± 33492489",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 102634487,
            "range": "± 1869002",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 668326075,
            "range": "± 16668141",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 11107672245,
            "range": "± 64823183",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1892,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1495,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1744135,
            "range": "± 62611",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 1010488,
            "range": "± 20736",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 579389,
            "range": "± 11082",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 3030,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 8154371,
            "range": "± 90839",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 21943812,
            "range": "± 848942",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 172392436,
            "range": "± 5345591",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1071813188,
            "range": "± 30121412",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 8111599,
            "range": "± 188070",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 10220878,
            "range": "± 316499",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 41747470,
            "range": "± 1847665",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 287679557,
            "range": "± 9271584",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 12180845,
            "range": "± 156340",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 438991,
            "range": "± 8398",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 973665923,
            "range": "± 29422702",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 110533,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 208458,
            "range": "± 4909",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 276447,
            "range": "± 9009",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 80029,
            "range": "± 1748",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 82529,
            "range": "± 3690",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 161271,
            "range": "± 3634",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 188648,
            "range": "± 3914",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 242330,
            "range": "± 9223",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 92658,
            "range": "± 3636",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 93081,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 184632,
            "range": "± 5230",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 186938,
            "range": "± 7159",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 233243,
            "range": "± 6920",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 204416,
            "range": "± 6141",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 207188,
            "range": "± 6623",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 304483,
            "range": "± 10329",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 309736,
            "range": "± 9038",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 306611,
            "range": "± 4565",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 4102377,
            "range": "± 48762",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 6330209,
            "range": "± 111749",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 26618100,
            "range": "± 249107",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 125455722,
            "range": "± 4208026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1474780960,
            "range": "± 20871139",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 12477603032,
            "range": "± 99178024",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 4038131,
            "range": "± 91570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 6147421,
            "range": "± 144401",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 26751162,
            "range": "± 806057",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 121324057,
            "range": "± 2834311",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1502603728,
            "range": "± 12560715",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 12665757895,
            "range": "± 80861351",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3999875,
            "range": "± 49591",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6876509,
            "range": "± 84515",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 26120123,
            "range": "± 325821",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 120039663,
            "range": "± 4321918",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1487835655,
            "range": "± 18971484",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 12576396568,
            "range": "± 144825219",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 4013089,
            "range": "± 61443",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5538326,
            "range": "± 39415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 31410706,
            "range": "± 606012",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 177472828,
            "range": "± 2505962",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1478918140,
            "range": "± 25386537",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 12575420368,
            "range": "± 75292581",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3989685,
            "range": "± 129918",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5672483,
            "range": "± 116792",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 82840175,
            "range": "± 1216518",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 124697123,
            "range": "± 2557052",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1436432150,
            "range": "± 12351580",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 12672221961,
            "range": "± 138759850",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4169352,
            "range": "± 115482",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5898409,
            "range": "± 116238",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 24896427,
            "range": "± 411062",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 124665662,
            "range": "± 4153153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1936494299,
            "range": "± 11685594",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 12117110517,
            "range": "± 91876236",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 7898093,
            "range": "± 890217",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 9296224,
            "range": "± 1097896",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 29337876,
            "range": "± 2536438",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 129710900,
            "range": "± 5549179",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1108710930,
            "range": "± 14429190",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 14784764718,
            "range": "± 70279913",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 4060505,
            "range": "± 52048",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 40627569,
            "range": "± 441652",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 402536845,
            "range": "± 9405449",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 4051797856,
            "range": "± 66405359",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38657594959,
            "range": "± 1020192751",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3837730,
            "range": "± 217471",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 37925929,
            "range": "± 520731",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 371411280,
            "range": "± 10414558",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3810735304,
            "range": "± 112075049",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38711030227,
            "range": "± 861783570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3878166,
            "range": "± 134283",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 37913109,
            "range": "± 845699",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 392075360,
            "range": "± 13276005",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3861819419,
            "range": "± 67833416",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 40328523274,
            "range": "± 1170472565",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 4064900,
            "range": "± 106318",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 40798933,
            "range": "± 1933897",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 407944666,
            "range": "± 4840419",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 4126625910,
            "range": "± 56793248",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 40880724376,
            "range": "± 355075043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 4273143,
            "range": "± 74096",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 42229227,
            "range": "± 1078173",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 416039422,
            "range": "± 4788305",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4240230860,
            "range": "± 80860138",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 40234638800,
            "range": "± 1534268122",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 6497959,
            "range": "± 521422",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 48805293,
            "range": "± 1187821",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 514220734,
            "range": "± 58352423",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 5032236125,
            "range": "± 65204108",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 52645789081,
            "range": "± 3010371533",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 5479643,
            "range": "± 60131",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 5405267,
            "range": "± 52922",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 5476074,
            "range": "± 92582",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 5523514,
            "range": "± 75676",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 5565779,
            "range": "± 101510",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 5394865,
            "range": "± 68698",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 7058911,
            "range": "± 117727",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 6992791,
            "range": "± 97231",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 6953189,
            "range": "± 74545",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 7085974,
            "range": "± 116933",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 5159771,
            "range": "± 161050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 6989065,
            "range": "± 148001",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 24414484,
            "range": "± 447656",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 26165503,
            "range": "± 807858",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 25363686,
            "range": "± 685886",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 4962603,
            "range": "± 227290",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 7013194,
            "range": "± 157913",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 26116617,
            "range": "± 624277",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 125983141,
            "range": "± 2594846",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 122893914,
            "range": "± 5191020",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 4855129,
            "range": "± 73060",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 6389217,
            "range": "± 180945",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 25623364,
            "range": "± 415539",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 127532060,
            "range": "± 2479924",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8637",
            "value": 1028134100,
            "range": "± 31773387",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4960980,
            "range": "± 164851",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 9403484,
            "range": "± 412471",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 50303064,
            "range": "± 1590934",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 247454440,
            "range": "± 4672522",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2333919237,
            "range": "± 56679551",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 4269436,
            "range": "± 119350",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 4312440,
            "range": "± 130673",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 4170355,
            "range": "± 84194",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 4280981,
            "range": "± 91502",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 4292858,
            "range": "± 129980",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 4185212,
            "range": "± 107729",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 4169485,
            "range": "± 48087",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 4085381,
            "range": "± 63471",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 4168943,
            "range": "± 39159",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 4292388,
            "range": "± 92665",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 4098530,
            "range": "± 127478",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 4173036,
            "range": "± 74043",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 4080126,
            "range": "± 92437",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3968919,
            "range": "± 112425",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 4077716,
            "range": "± 81093",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 4250105,
            "range": "± 112212",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 4229053,
            "range": "± 101051",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 4120342,
            "range": "± 103760",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 4005736,
            "range": "± 89588",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3895777,
            "range": "± 100904",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 4148039,
            "range": "± 89498",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 4113389,
            "range": "± 132860",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 4267887,
            "range": "± 104839",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3880407,
            "range": "± 75810",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3966098,
            "range": "± 64921",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3841655,
            "range": "± 57197",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 4370731,
            "range": "± 127543",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 4100410,
            "range": "± 151776",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4355554,
            "range": "± 118694",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 4127997,
            "range": "± 128093",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 5119106,
            "range": "± 227383",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 4145455,
            "range": "± 175899",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 197084,
            "range": "± 9052",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 221837,
            "range": "± 17716",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1216,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 851,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 519,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 93382,
            "range": "± 4822",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1810956,
            "range": "± 76723",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 559284,
            "range": "± 46839",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4500,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 3167,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1929,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 8,
            "range": "± 0",
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
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 13,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 16,
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
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11474,
            "range": "± 521",
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
            "value": 83674,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 43,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 77,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 261,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 152,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6650,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 175,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4657,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 23696,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 13,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 267,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 21,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 211,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 13653,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 145074,
            "range": "± 9404",
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
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sub_assign",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 38,
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
            "value": 38,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6202,
            "range": "± 185",
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
            "value": 35335,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 27,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 42,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 617198,
            "range": "± 25278",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1259518,
            "range": "± 56445",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 2162827,
            "range": "± 100888",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 135127,
            "range": "± 3585",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 277035,
            "range": "± 5967",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 705582,
            "range": "± 10497",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 81602666,
            "range": "± 2988815",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 79910305,
            "range": "± 1757322",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 83919451,
            "range": "± 3775583",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 473,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 957,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 4244,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 286,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 462,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 25315,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 142876,
            "range": "± 2515",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 285682,
            "range": "± 9942",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 759568,
            "range": "± 28760",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 77910920,
            "range": "± 1263634",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 79211364,
            "range": "± 2093489",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 86266497,
            "range": "± 2273839",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 9433,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 18608,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 44936,
            "range": "± 2397",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4966249,
            "range": "± 346318",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 5337452,
            "range": "± 174476",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 5257459,
            "range": "± 165556",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 5655,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 11680,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 20188,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 2134633,
            "range": "± 73493",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 2092791,
            "range": "± 74200",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 2172499,
            "range": "± 43354",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 53779249543,
            "range": "± 946215976",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 496368737,
            "range": "± 20825766",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 29520694189,
            "range": "± 702369491",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8660478242,
            "range": "± 189959763",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 321574527,
            "range": "± 8304078",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 281357743,
            "range": "± 9979394",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1414372761,
            "range": "± 23497295",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "864b927f47c7f3aa0824aa054eea734dbeff2dc4",
          "message": "Merge pull request #1648 from AleoHQ/feat/fee-execute\n\nEnsure there are no fee transitions in executions",
          "timestamp": "2023-06-12T16:07:51-07:00",
          "tree_id": "5d9180378177b8b2910b7028f16b6c2c5957d66f",
          "url": "https://github.com/catnodes/snarkVM/commit/864b927f47c7f3aa0824aa054eea734dbeff2dc4"
        },
        "date": 1686682740518,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 90773821,
            "range": "± 2924069",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 656816907,
            "range": "± 8920712",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1202038645,
            "range": "± 30783595",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1850515839,
            "range": "± 8810260",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2336129276,
            "range": "± 89093555",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2425088146,
            "range": "± 72928027",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4401756433,
            "range": "± 149486389",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8742434509,
            "range": "± 65140074",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 58575013,
            "range": "± 627581",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 445389758,
            "range": "± 1613975",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4606525287,
            "range": "± 117767045",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 78451,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 198376,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1415349279,
            "range": "± 4807503",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 71838281,
            "range": "± 2442897",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 515830744,
            "range": "± 5848487",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8703550529,
            "range": "± 39969535",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1287,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 999,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1227291,
            "range": "± 33042",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 808307,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 448270,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 2308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 6371240,
            "range": "± 77456",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16619463,
            "range": "± 92665",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 139662408,
            "range": "± 1378790",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 867550582,
            "range": "± 6448422",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6564741,
            "range": "± 34586",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8161525,
            "range": "± 69360",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 31195340,
            "range": "± 874315",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 256753126,
            "range": "± 7136354",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 6602755,
            "range": "± 7106",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 433469,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 782372949,
            "range": "± 4261950",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 79161,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 150552,
            "range": "± 2874",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 201131,
            "range": "± 3765",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 64621,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 64947,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 129869,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 151806,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 195275,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 76283,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 76363,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 153156,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 153026,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 191188,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 169989,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 170253,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 225895,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 226180,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 226159,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3344909,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 4461248,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 21818717,
            "range": "± 7665",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 99592876,
            "range": "± 1520719",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1048746228,
            "range": "± 3208244",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 10050767773,
            "range": "± 331116050",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3252899,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 4949289,
            "range": "± 1482",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 21712758,
            "range": "± 69472",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 85046379,
            "range": "± 2017644",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1044282523,
            "range": "± 2255661",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 9638959182,
            "range": "± 320982335",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 2869268,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 4966234,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 18499157,
            "range": "± 57156",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 90094705,
            "range": "± 2313958",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1050199285,
            "range": "± 2440489",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 8937518282,
            "range": "± 307244915",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 2869335,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4030429,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 21629712,
            "range": "± 73724",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 125346375,
            "range": "± 4337081",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1054002312,
            "range": "± 5712634",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 8983727995,
            "range": "± 332209066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 2877734,
            "range": "± 2064",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4123718,
            "range": "± 4127",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 59286562,
            "range": "± 1082160",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 94185642,
            "range": "± 3197165",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1005713364,
            "range": "± 6531393",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 9984767351,
            "range": "± 596158029",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3478902,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4808929,
            "range": "± 16621",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19697970,
            "range": "± 76153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 99714251,
            "range": "± 4100849",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1404977641,
            "range": "± 45060566",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 14445287260,
            "range": "± 1066374117",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5353751,
            "range": "± 597998",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 6615675,
            "range": "± 679390",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 21199009,
            "range": "± 593426",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 96077381,
            "range": "± 3646176",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 872420858,
            "range": "± 6728977",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11744222629,
            "range": "± 28365455",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3257388,
            "range": "± 1281",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 32555854,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 325517008,
            "range": "± 46003",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3253919739,
            "range": "± 919905",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 32549264806,
            "range": "± 5207460",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3254584,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 32549523,
            "range": "± 7845",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 325661482,
            "range": "± 85415",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3255115959,
            "range": "± 1004486",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 32570131301,
            "range": "± 3043665",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3254138,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 32549676,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 325747139,
            "range": "± 418650",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3255065947,
            "range": "± 262124",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 32576531473,
            "range": "± 3227939",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3263040,
            "range": "± 2768",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 32610024,
            "range": "± 9948",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 326175992,
            "range": "± 61131",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3251888703,
            "range": "± 297949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 32623542271,
            "range": "± 3701954",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3430626,
            "range": "± 9440",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 34007624,
            "range": "± 107876",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 340359782,
            "range": "± 547542",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3400119197,
            "range": "± 4293017",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 33976868213,
            "range": "± 31841319",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5136473,
            "range": "± 162256",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 40131940,
            "range": "± 499066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 392409780,
            "range": "± 9413605",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 3999089814,
            "range": "± 80819343",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 39406690730,
            "range": "± 934501438",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 2889492,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 2888887,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 2890461,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 2890257,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 2888646,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 2904892,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4094911,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4098401,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4096104,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4097406,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 2913396,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4285466,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 17507899,
            "range": "± 200666",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 17516361,
            "range": "± 196582",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 17466028,
            "range": "± 203936",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 2926273,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4296737,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 17511072,
            "range": "± 195782",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 99890467,
            "range": "± 8676632",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 99798164,
            "range": "± 2495108",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3367703,
            "range": "± 4904",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4829145,
            "range": "± 6282",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 22279147,
            "range": "± 253691",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 108042498,
            "range": "± 1173577",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8618",
            "value": 815009615,
            "range": "± 6710728",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3112426,
            "range": "± 41074",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 5979063,
            "range": "± 32567",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 35262274,
            "range": "± 33253",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 174929358,
            "range": "± 41724295",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1617702019,
            "range": "± 8691027",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 2868092,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 2878011,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 2868372,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 2875990,
            "range": "± 1127",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 2872397,
            "range": "± 2336",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 2876561,
            "range": "± 3320",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 2873992,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 2875480,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 2868714,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 2875999,
            "range": "± 2489",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 2868684,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 2877175,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 2869442,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 2877556,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 2868121,
            "range": "± 3708",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 2876236,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 2870525,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 2876266,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 2875979,
            "range": "± 3636",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 2871055,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 2878385,
            "range": "± 3747",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 2876947,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 2898164,
            "range": "± 3518",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 2870411,
            "range": "± 1277",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 2943517,
            "range": "± 6651",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 2874935,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3038848,
            "range": "± 12930",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 2883125,
            "range": "± 5381",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3209966,
            "range": "± 11046",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 2885472,
            "range": "± 6915",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3621752,
            "range": "± 74314",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 2912608,
            "range": "± 25222",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 140685,
            "range": "± 1881",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 171838,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 932,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 686,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 65537,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1330808,
            "range": "± 9304",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 366502,
            "range": "± 8976",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3528,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2514,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1613,
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
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 13,
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
            "value": 51,
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
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 8849,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 59655,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 184,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 4908,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 132,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3209,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 17716,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 187,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 9910,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 98049,
            "range": "± 3977",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 4,
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
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 7,
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
            "value": 26,
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
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 5021,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 28021,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 486984,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 996346,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1700127,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 96623,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 201773,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 500271,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 68450820,
            "range": "± 77075",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 67832557,
            "range": "± 3615055",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 62348071,
            "range": "± 54388",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 338,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 668,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 2970,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 182,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 20477,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 96663,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 191736,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 501613,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 57932120,
            "range": "± 127871",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 65367741,
            "range": "± 3131801",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 67654735,
            "range": "± 91141",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 7156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 14434,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 35672,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4190497,
            "range": "± 9302",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4189581,
            "range": "± 11719",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4343226,
            "range": "± 4803",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4587,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9464,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 16364,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1725679,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1721330,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1811208,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 42016014498,
            "range": "± 5034774850",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 406204317,
            "range": "± 18068205",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 22707287581,
            "range": "± 661315155",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 6330641920,
            "range": "± 14414001",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 242767046,
            "range": "± 1322984",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 211602593,
            "range": "± 1129449",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1043577307,
            "range": "± 3627359",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 256 of 2^13",
            "value": 2503339018,
            "range": "± 87216408",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 105963739,
            "range": "± 4180759",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 936752913,
            "range": "± 5570863",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 2389039690,
            "range": "± 8083728",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6db3488556c927177a5f8e3303bf26109e63c88b",
          "message": "Merge pull request #1666 from AleoHQ/feat/rewards\n\nAdds `contains` and `get` finalize commands",
          "timestamp": "2023-06-13T15:04:45-07:00",
          "tree_id": "e0bf0ca9d8d7846aa6da907b0d0d79d308ec5279",
          "url": "https://github.com/catnodes/snarkVM/commit/6db3488556c927177a5f8e3303bf26109e63c88b"
        },
        "date": 1686716037368,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 102331716,
            "range": "± 1932086",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 710250359,
            "range": "± 13402553",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1297899514,
            "range": "± 41167670",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1980599788,
            "range": "± 14076929",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2517752508,
            "range": "± 20026978",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2842186672,
            "range": "± 37419685",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5203700888,
            "range": "± 50225835",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9397243220,
            "range": "± 40828249",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 65176746,
            "range": "± 819141",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 485128713,
            "range": "± 4040671",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4265178080,
            "range": "± 60079004",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 85994,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 212215,
            "range": "± 4759",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1625863538,
            "range": "± 17396060",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 93544350,
            "range": "± 1033077",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 593700724,
            "range": "± 10391309",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 9812789958,
            "range": "± 73706773",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1641,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1258,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1489221,
            "range": "± 34656",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 868838,
            "range": "± 12478",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 505914,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 2597,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7100486,
            "range": "± 148887",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 18629378,
            "range": "± 399481",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 153366996,
            "range": "± 3701824",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 932332613,
            "range": "± 17336815",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7210135,
            "range": "± 121442",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 8978624,
            "range": "± 176911",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 33355473,
            "range": "± 1357124",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 250973717,
            "range": "± 3545772",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 7534648,
            "range": "± 169092",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 486361,
            "range": "± 8585",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 837866239,
            "range": "± 9722504",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 103921,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 196841,
            "range": "± 6062",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 253826,
            "range": "± 7980",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 75578,
            "range": "± 1505",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 76969,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 151946,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 179873,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 233226,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 87224,
            "range": "± 2589",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 86868,
            "range": "± 2692",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 178026,
            "range": "± 3237",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 171194,
            "range": "± 5315",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 220333,
            "range": "± 6570",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 191914,
            "range": "± 5486",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 191097,
            "range": "± 4819",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 291753,
            "range": "± 7810",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 285322,
            "range": "± 9527",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 280829,
            "range": "± 9547",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3774563,
            "range": "± 34425",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 5668674,
            "range": "± 70750",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 26475584,
            "range": "± 181777",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 113982829,
            "range": "± 1812421",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1374230671,
            "range": "± 21106424",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 11643685413,
            "range": "± 126950569",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3702644,
            "range": "± 77373",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5673361,
            "range": "± 99272",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 24667481,
            "range": "± 358698",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 111501671,
            "range": "± 2298575",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1348848958,
            "range": "± 11563589",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 11448147438,
            "range": "± 106168827",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3680134,
            "range": "± 68945",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6555947,
            "range": "± 31125",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 24298030,
            "range": "± 331906",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 111351538,
            "range": "± 2324297",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1381996997,
            "range": "± 9825072",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 11751992843,
            "range": "± 178248883",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3803569,
            "range": "± 63680",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5379099,
            "range": "± 35347",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 28240338,
            "range": "± 700781",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 170096770,
            "range": "± 1550091",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1373127380,
            "range": "± 11646670",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 11732226353,
            "range": "± 116418958",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3861071,
            "range": "± 26855",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5504568,
            "range": "± 76515",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 79077846,
            "range": "± 714410",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 114519080,
            "range": "± 3123665",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1332576612,
            "range": "± 11182457",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 11468171626,
            "range": "± 102497636",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3834650,
            "range": "± 94043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5299540,
            "range": "± 143242",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 21801990,
            "range": "± 466642",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 110944748,
            "range": "± 3144468",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1735920200,
            "range": "± 16354043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 10925608218,
            "range": "± 133692604",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 6374467,
            "range": "± 898573",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 7787990,
            "range": "± 641788",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 26909093,
            "range": "± 1009047",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 121332136,
            "range": "± 2304058",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1034605093,
            "range": "± 5496265",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13569567744,
            "range": "± 48705407",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3794522,
            "range": "± 33773",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 37875145,
            "range": "± 280242",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 380761795,
            "range": "± 4217100",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3792647502,
            "range": "± 17872237",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 37524299057,
            "range": "± 576251501",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3777623,
            "range": "± 94790",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 36257370,
            "range": "± 515551",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 362645546,
            "range": "± 4091783",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3668619463,
            "range": "± 19605674",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 37377628166,
            "range": "± 479498567",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3759945,
            "range": "± 32714",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 38132955,
            "range": "± 521647",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 374974943,
            "range": "± 5366376",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3735145804,
            "range": "± 29369049",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 37418546655,
            "range": "± 349546255",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3724458,
            "range": "± 77527",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 36975048,
            "range": "± 845497",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 374190032,
            "range": "± 2531608",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3711561984,
            "range": "± 40697131",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 37021364748,
            "range": "± 145973272",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3801324,
            "range": "± 50442",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 37994768,
            "range": "± 686119",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 380979354,
            "range": "± 5063359",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3862166455,
            "range": "± 40468867",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 38389052763,
            "range": "± 275116011",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5391807,
            "range": "± 208022",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 47124767,
            "range": "± 1064560",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 472483755,
            "range": "± 8720090",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4748130822,
            "range": "± 39588765",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 47335202777,
            "range": "± 308365824",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3664446,
            "range": "± 83213",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3689112,
            "range": "± 105398",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3682096,
            "range": "± 57815",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3806655,
            "range": "± 51432",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3792648,
            "range": "± 57675",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3663706,
            "range": "± 98706",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5144244,
            "range": "± 103767",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5141418,
            "range": "± 93109",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5270697,
            "range": "± 74074",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5203130,
            "range": "± 108861",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3806082,
            "range": "± 60592",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5632297,
            "range": "± 77531",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 21939028,
            "range": "± 407332",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 21509479,
            "range": "± 269026",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 21764508,
            "range": "± 576397",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3660849,
            "range": "± 68080",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5310183,
            "range": "± 86172",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 22371512,
            "range": "± 467036",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 112027963,
            "range": "± 1999940",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 111335740,
            "range": "± 2651223",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3729197,
            "range": "± 67857",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5322090,
            "range": "± 106681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 23408935,
            "range": "± 385703",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 120207698,
            "range": "± 1598524",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8605",
            "value": 922742605,
            "range": "± 10365477",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3809675,
            "range": "± 100403",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 7680882,
            "range": "± 139374",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 44650005,
            "range": "± 791326",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 223662784,
            "range": "± 2998315",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2081163977,
            "range": "± 21095470",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3615359,
            "range": "± 37295",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3798513,
            "range": "± 109372",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3633385,
            "range": "± 70714",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3682293,
            "range": "± 88576",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3642240,
            "range": "± 81734",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3713644,
            "range": "± 85182",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3649346,
            "range": "± 71183",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3633222,
            "range": "± 92197",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3613921,
            "range": "± 56033",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3607934,
            "range": "± 51769",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3654914,
            "range": "± 82324",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3709084,
            "range": "± 73650",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3712059,
            "range": "± 71274",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3685673,
            "range": "± 40196",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3700904,
            "range": "± 46341",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3777337,
            "range": "± 51145",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3697226,
            "range": "± 53731",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3728487,
            "range": "± 85444",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3771987,
            "range": "± 29308",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3790998,
            "range": "± 62051",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3683324,
            "range": "± 80299",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3698427,
            "range": "± 75926",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3802926,
            "range": "± 61713",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3704499,
            "range": "± 48271",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3744895,
            "range": "± 52827",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3667066,
            "range": "± 50554",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3866173,
            "range": "± 85867",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3672179,
            "range": "± 80291",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4048786,
            "range": "± 33386",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3721088,
            "range": "± 43885",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4421545,
            "range": "± 137597",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3789286,
            "range": "± 73051",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 180094,
            "range": "± 5993",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 193734,
            "range": "± 4209",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1065,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 784,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 488,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 83730,
            "range": "± 2408",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1682285,
            "range": "± 45384",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 472161,
            "range": "± 12694",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3907,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2932,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1799,
            "range": "± 50",
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
            "value": 11,
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
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 66,
            "range": "± 1",
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
            "value": 58,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 11214,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 75538,
            "range": "± 2622",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 39,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 77,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 229,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 133,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 5827,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 166,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4023,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 22578,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 242,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 181,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 12914,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 129190,
            "range": "± 8888",
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
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 9,
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
            "value": 33,
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
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6370,
            "range": "± 187",
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
            "value": 31378,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 543745,
            "range": "± 17914",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1112891,
            "range": "± 30812",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1936190,
            "range": "± 44696",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 119960,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 245549,
            "range": "± 4331",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 648544,
            "range": "± 14969",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 76693654,
            "range": "± 947235",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 77312030,
            "range": "± 905045",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 79594398,
            "range": "± 1317935",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 420,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 880,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3838,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 238,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 366,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 25606,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 121261,
            "range": "± 3502",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 236007,
            "range": "± 3334",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 626576,
            "range": "± 14634",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 72577426,
            "range": "± 807894",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 73256821,
            "range": "± 1028419",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 76040818,
            "range": "± 783898",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 8012,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 15963,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 39598,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4710588,
            "range": "± 78699",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4721532,
            "range": "± 61688",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4934719,
            "range": "± 101501",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4980,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 10734,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 18445,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1904708,
            "range": "± 31042",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1914517,
            "range": "± 31814",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 2043829,
            "range": "± 53283",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 50031131904,
            "range": "± 291035099",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 478519366,
            "range": "± 6003145",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 27642113495,
            "range": "± 209753987",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8131865601,
            "range": "± 130260838",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 316006279,
            "range": "± 5766234",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 270000735,
            "range": "± 3830972",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1335300369,
            "range": "± 17173930",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 256 of 2^13",
            "value": 3233878650,
            "range": "± 38608883",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 136398031,
            "range": "± 4935455",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 1198355865,
            "range": "± 12412479",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 3066118154,
            "range": "± 19655086",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a87e5152105671370489ddbed5892c307053af04",
          "message": "Merge pull request #1675 from AleoHQ/dependabot/cargo/wasm-bindgen-test-0.3.37\n\nBump wasm-bindgen-test from 0.3.36 to 0.3.37",
          "timestamp": "2023-06-14T09:24:00-07:00",
          "tree_id": "d83edb360596d4be5d365fc35a9560b41ed8b8b9",
          "url": "https://github.com/catnodes/snarkVM/commit/a87e5152105671370489ddbed5892c307053af04"
        },
        "date": 1686785476271,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 109108929,
            "range": "± 6475128",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 761118850,
            "range": "± 4441468",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1385578559,
            "range": "± 22199008",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2130372350,
            "range": "± 6992613",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2697529864,
            "range": "± 5348481",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3047861861,
            "range": "± 32425891",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 5564496352,
            "range": "± 18620215",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 9997698981,
            "range": "± 13925283",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 70668239,
            "range": "± 145487",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 525285152,
            "range": "± 1800971",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 4994197097,
            "range": "± 115680613",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 96372,
            "range": "± 4253",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 240213,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1674764333,
            "range": "± 3874447",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 95816042,
            "range": "± 640004",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 628128466,
            "range": "± 3960963",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 10407760788,
            "range": "± 19878697",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1766,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1575915,
            "range": "± 35011",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 939505,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 537352,
            "range": "± 8204",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 3000,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 7581807,
            "range": "± 58066",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 19877126,
            "range": "± 61107",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 165691348,
            "range": "± 1344886",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1001031194,
            "range": "± 8348396",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 7754737,
            "range": "± 85275",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 9564014,
            "range": "± 109434",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 35799975,
            "range": "± 968067",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 278083286,
            "range": "± 5281109",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 8089267,
            "range": "± 8169",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 519749,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 842611065,
            "range": "± 2027106",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 108636,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 209353,
            "range": "± 4292",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 263448,
            "range": "± 7471",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 78443,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 78629,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 156718,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 183272,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 235715,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 92091,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 92225,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 184049,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 184317,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 230607,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 205634,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 205380,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 308846,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 309035,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 308621,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3993355,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 6032993,
            "range": "± 1805",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 26037946,
            "range": "± 11430",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 116711777,
            "range": "± 2577320",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1408931576,
            "range": "± 8291029",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 12024792208,
            "range": "± 16400278",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3883758,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 5949249,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 26225758,
            "range": "± 41476",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 114408194,
            "range": "± 1423567",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1417607322,
            "range": "± 3208636",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 12062137154,
            "range": "± 29035979",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3882692,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 6742321,
            "range": "± 2948",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 25264348,
            "range": "± 48800",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 116458060,
            "range": "± 2179612",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1425897244,
            "range": "± 9514258",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 12104363994,
            "range": "± 27295698",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3883786,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 5465476,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 29556316,
            "range": "± 30331",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 170890440,
            "range": "± 1259160",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1412173086,
            "range": "± 9680316",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 12077316053,
            "range": "± 24366598",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3889387,
            "range": "± 2922",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 5605087,
            "range": "± 3498",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 80653362,
            "range": "± 364113",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 122020755,
            "range": "± 2532605",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1358723534,
            "range": "± 8793960",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 12039297487,
            "range": "± 23465695",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4117515,
            "range": "± 7462",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 5726901,
            "range": "± 6893",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 23745800,
            "range": "± 80060",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 119916368,
            "range": "± 3135680",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1802886411,
            "range": "± 12211787",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 11477765243,
            "range": "± 27986098",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 6525810,
            "range": "± 758563",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 8473961,
            "range": "± 825660",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 28438555,
            "range": "± 660857",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 120866743,
            "range": "± 2296568",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1037369588,
            "range": "± 4069430",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 13962245133,
            "range": "± 33396735",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3886137,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 38883407,
            "range": "± 20915",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 388552995,
            "range": "± 1013797",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3875356409,
            "range": "± 192608",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 38893721617,
            "range": "± 1752366",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3881561,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 38876203,
            "range": "± 10396",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 388719785,
            "range": "± 34020",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3887843547,
            "range": "± 180954",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 38896032755,
            "range": "± 40673198",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3884705,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 38877574,
            "range": "± 13770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 389104532,
            "range": "± 44222",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3888758261,
            "range": "± 4754787",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 38893049335,
            "range": "± 3430882",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3894648,
            "range": "± 1692",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 38969482,
            "range": "± 17091",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 389495780,
            "range": "± 59720",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3893602760,
            "range": "± 1110590",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 38938958401,
            "range": "± 31892931",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 4075492,
            "range": "± 11553",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 40562439,
            "range": "± 54079",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 404589244,
            "range": "± 658321",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4043919179,
            "range": "± 5523291",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 40480696391,
            "range": "± 16921059",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 5753527,
            "range": "± 162977",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 50584965,
            "range": "± 243584",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 513708499,
            "range": "± 3563058",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 5091817754,
            "range": "± 18413799",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 51159472646,
            "range": "± 232824250",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3912437,
            "range": "± 6618",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3908946,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3900669,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 3910408,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3902355,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3899353,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 5484484,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5484475,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5481957,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5487480,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3895524,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 5720464,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 23174456,
            "range": "± 26385",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 23173259,
            "range": "± 6095",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 23169087,
            "range": "± 8594",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3908858,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 5716425,
            "range": "± 5434",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 23151744,
            "range": "± 11919",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 118067100,
            "range": "± 3617684",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 118661802,
            "range": "± 2501432",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3936824,
            "range": "± 4611",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 5626507,
            "range": "± 3583",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 26181977,
            "range": "± 48218",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 131414961,
            "range": "± 2202089",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8629",
            "value": 966489196,
            "range": "± 10309453",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4064524,
            "range": "± 47021",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 8514115,
            "range": "± 39892",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 48870037,
            "range": "± 48311",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 241410982,
            "range": "± 1407083",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2253272962,
            "range": "± 40000421",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3884525,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3900505,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3884154,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3897534,
            "range": "± 2690",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3880490,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3885297,
            "range": "± 1287",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3880871,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3884708,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3879941,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3892772,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3884440,
            "range": "± 7282",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3895762,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3881263,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3896306,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3882171,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3886069,
            "range": "± 2327",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3883880,
            "range": "± 2360",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3892174,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3885416,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3892149,
            "range": "± 1976",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3897077,
            "range": "± 1942",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3880442,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3908466,
            "range": "± 2782",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3891223,
            "range": "± 1103",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3949410,
            "range": "± 4082",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3882746,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 4050558,
            "range": "± 5753",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3896257,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4237674,
            "range": "± 20400",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3892125,
            "range": "± 6887",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 4674007,
            "range": "± 72057",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3912407,
            "range": "± 23601",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 190458,
            "range": "± 3849",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 210229,
            "range": "± 24915",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 818,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 518,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 88905,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1801138,
            "range": "± 9001",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 518888,
            "range": "± 92537",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4246,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2993,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1899,
            "range": "± 1",
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
            "value": 16,
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
            "value": 12061,
            "range": "± 15",
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
            "value": 80516,
            "range": "± 448",
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
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 246,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6273,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 175,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4348,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 24028,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 253,
            "range": "± 0",
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
            "value": 200,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 13510,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 134897,
            "range": "± 7614",
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
            "value": 9,
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
            "value": 6513,
            "range": "± 8",
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
            "value": 33552,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 585737,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1187798,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 2022940,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 140952,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 265089,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 691915,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 81046731,
            "range": "± 165692",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 80890735,
            "range": "± 142514",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 83631346,
            "range": "± 417503",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 473,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 1032,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 5299,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 320,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 458,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 38812,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 134413,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 267324,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 681030,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 77987512,
            "range": "± 302726",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 78010984,
            "range": "± 94254",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 80396023,
            "range": "± 288711",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 8501,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 17190,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 42745,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 4775783,
            "range": "± 28138",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 4814289,
            "range": "± 89406",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 5022788,
            "range": "± 9428",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 5578,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 11225,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 20378,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1871769,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1876676,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1996575,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 53167740610,
            "range": "± 158459512",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 505877900,
            "range": "± 8931887",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 29172650842,
            "range": "± 104521880",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 8593392060,
            "range": "± 19268453",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 328503803,
            "range": "± 999957",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 285586462,
            "range": "± 862873",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1423786891,
            "range": "± 7787363",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 256 of 2^13",
            "value": 3396360025,
            "range": "± 86751936",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 143062202,
            "range": "± 1795309",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 1262438076,
            "range": "± 7022794",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 3251687250,
            "range": "± 11165794",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d753fb788fb291f28e8edeba6f9c56ebbf397ce4",
          "message": "Merge pull request #1674 from AleoHQ/tests/execute-and-finalize\n\n[Test] Update test framework to run `execute` and `finalize`.",
          "timestamp": "2023-06-14T21:27:00-07:00",
          "tree_id": "eccdca35a2ed03bae2d7c8d25c2d252b70e8e4f3",
          "url": "https://github.com/catnodes/snarkVM/commit/d753fb788fb291f28e8edeba6f9c56ebbf397ce4"
        },
        "date": 1686838316909,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 87793053,
            "range": "± 2641344",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 626964263,
            "range": "± 27494214",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1172542856,
            "range": "± 31006501",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1852945975,
            "range": "± 36052177",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 2294755039,
            "range": "± 38453439",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 2669167654,
            "range": "± 64383556",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 4719979186,
            "range": "± 84229715",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 8428352392,
            "range": "± 97187942",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 60105216,
            "range": "± 2955576",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 418238278,
            "range": "± 13487554",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 3776075272,
            "range": "± 85787974",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 76884,
            "range": "± 2652",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 190413,
            "range": "± 17884",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1434525518,
            "range": "± 42956961",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 78361098,
            "range": "± 2564844",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 506569249,
            "range": "± 10503160",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 8327703948,
            "range": "± 124572125",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1400,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1168,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1307258,
            "range": "± 33293",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 755510,
            "range": "± 26829",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 448716,
            "range": "± 24321",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 2368,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 5971642,
            "range": "± 134776",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 16204103,
            "range": "± 294383",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 134617786,
            "range": "± 5953541",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 820076066,
            "range": "± 56347877",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 6731833,
            "range": "± 320615",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 7992527,
            "range": "± 205077",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 29655516,
            "range": "± 1362966",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 244625596,
            "range": "± 9290440",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 10276369,
            "range": "± 505524",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 350147,
            "range": "± 11940",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 896984086,
            "range": "± 37754586",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 84369,
            "range": "± 1863",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 167935,
            "range": "± 7438",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 210201,
            "range": "± 8779",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 60777,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 60145,
            "range": "± 1862",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 124910,
            "range": "± 6289",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 143721,
            "range": "± 4014",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 191018,
            "range": "± 10078",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 69680,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 70035,
            "range": "± 3874",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 139984,
            "range": "± 6007",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 139400,
            "range": "± 10626",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 175005,
            "range": "± 8188",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 152882,
            "range": "± 5704",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 151193,
            "range": "± 7013",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 237811,
            "range": "± 13147",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 232653,
            "range": "± 13737",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 229297,
            "range": "± 14574",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 3063266,
            "range": "± 104348",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 4751330,
            "range": "± 109063",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 20525378,
            "range": "± 275192",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 97953696,
            "range": "± 4368160",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1161097413,
            "range": "± 27721396",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 9863315750,
            "range": "± 200127799",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 3123600,
            "range": "± 73252",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 4699380,
            "range": "± 195927",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 20613819,
            "range": "± 994907",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 93036783,
            "range": "± 1825459",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1212466816,
            "range": "± 56860051",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 9883856000,
            "range": "± 113197304",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 3154597,
            "range": "± 67136",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 5682160,
            "range": "± 344694",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 21127503,
            "range": "± 871949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 94096342,
            "range": "± 2526664",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1152911698,
            "range": "± 31336051",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 10012526597,
            "range": "± 100415523",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 3142259,
            "range": "± 96487",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 4441259,
            "range": "± 74493",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 24896395,
            "range": "± 1429493",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 140156711,
            "range": "± 2758938",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1152912102,
            "range": "± 35813408",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 9988144215,
            "range": "± 130636668",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 3222610,
            "range": "± 116382",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 4521740,
            "range": "± 162642",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 65279910,
            "range": "± 1227375",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 98946658,
            "range": "± 3286287",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1127695752,
            "range": "± 58210604",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 9934621523,
            "range": "± 176244075",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 3299704,
            "range": "± 105630",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 4621176,
            "range": "± 173277",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 19275913,
            "range": "± 968379",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 99420723,
            "range": "± 3513021",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1467888511,
            "range": "± 39417259",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 9477911198,
            "range": "± 283808254",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 5510547,
            "range": "± 513355",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 6681101,
            "range": "± 218893",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 21921520,
            "range": "± 1003465",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 98168002,
            "range": "± 3471575",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 840406488,
            "range": "± 26666677",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 11436613049,
            "range": "± 152830633",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 3147166,
            "range": "± 80608",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 31356677,
            "range": "± 1298739",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 315426406,
            "range": "± 8163413",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 3223557256,
            "range": "± 57949995",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 31590241275,
            "range": "± 473533255",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 3132091,
            "range": "± 58238",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 31011075,
            "range": "± 438872",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 320441655,
            "range": "± 6339795",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 3184965295,
            "range": "± 72889232",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 31901337039,
            "range": "± 182627214",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 3117835,
            "range": "± 78969",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 31025726,
            "range": "± 614079",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 314457089,
            "range": "± 6165101",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 3178544483,
            "range": "± 38287056",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 31896330886,
            "range": "± 207153837",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 3126499,
            "range": "± 37711",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 31918178,
            "range": "± 651278",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 316080731,
            "range": "± 10168178",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 3159057020,
            "range": "± 61640778",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 31963174657,
            "range": "± 179108879",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 3370039,
            "range": "± 164554",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 34339868,
            "range": "± 1477449",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 348290297,
            "range": "± 8112549",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 3514483376,
            "range": "± 80056093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 33767401398,
            "range": "± 530883794",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4807346,
            "range": "± 348066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 40888598,
            "range": "± 1833995",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 415691054,
            "range": "± 5380314",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4181989528,
            "range": "± 38784221",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 42441448119,
            "range": "± 337191378",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 3162321,
            "range": "± 155548",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 3107679,
            "range": "± 74652",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 3097206,
            "range": "± 61854",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 2998872,
            "range": "± 88275",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 3045038,
            "range": "± 59024",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 3049935,
            "range": "± 104867",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 4271679,
            "range": "± 74522",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 4290600,
            "range": "± 65951",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 4230449,
            "range": "± 80789",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 4248543,
            "range": "± 60463",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 3036923,
            "range": "± 40697",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 4412874,
            "range": "± 78104",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 18268599,
            "range": "± 273747",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 18478481,
            "range": "± 671865",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 18146126,
            "range": "± 587795",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 3097226,
            "range": "± 42158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 4520903,
            "range": "± 232851",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 18062220,
            "range": "± 818309",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 98307801,
            "range": "± 4601733",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 96695753,
            "range": "± 2994043",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 3066911,
            "range": "± 81588",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 4547224,
            "range": "± 119799",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 20888392,
            "range": "± 2091681",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 104903151,
            "range": "± 3633122",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8667",
            "value": 786990116,
            "range": "± 11226419",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 3243993,
            "range": "± 190874",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 5685716,
            "range": "± 203509",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 38004280,
            "range": "± 1268128",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 195504102,
            "range": "± 9018279",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1883213618,
            "range": "± 48364081",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 3225874,
            "range": "± 77310",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 3296261,
            "range": "± 135477",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 3207137,
            "range": "± 142864",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 3264264,
            "range": "± 77764",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 3122144,
            "range": "± 144650",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 3264766,
            "range": "± 133248",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 3283611,
            "range": "± 131590",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 3194713,
            "range": "± 179619",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 3084327,
            "range": "± 126329",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 3119512,
            "range": "± 184001",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 3090668,
            "range": "± 135882",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 3123370,
            "range": "± 66658",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 3035014,
            "range": "± 106607",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 3101208,
            "range": "± 38943",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 3096065,
            "range": "± 58144",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 3184643,
            "range": "± 108881",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 3035252,
            "range": "± 56784",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 3132140,
            "range": "± 185608",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 3056183,
            "range": "± 80027",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 3106960,
            "range": "± 124772",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 3077586,
            "range": "± 92883",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 3086466,
            "range": "± 43685",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 3134099,
            "range": "± 99754",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 3112143,
            "range": "± 52240",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 3092952,
            "range": "± 57319",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 3113359,
            "range": "± 62362",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 3236761,
            "range": "± 143116",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 3088250,
            "range": "± 91804",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 3434886,
            "range": "± 160910",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 3138167,
            "range": "± 171340",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3613536,
            "range": "± 296341",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 3175928,
            "range": "± 126649",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 150216,
            "range": "± 9835",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 171453,
            "range": "± 13158",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 892,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 663,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 408,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 71390,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1448453,
            "range": "± 83495",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 436382,
            "range": "± 23386",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3710,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2524,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1549,
            "range": "± 102",
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
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 11,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 12,
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
            "value": 55,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 47,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 8675,
            "range": "± 514",
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
            "value": 64776,
            "range": "± 5497",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 61,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 222,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 115,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 4901,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 143,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3430,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 18517,
            "range": "± 1466",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 19,
            "range": "± 1",
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
            "value": 196,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 161,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 9967,
            "range": "± 988",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 105385,
            "range": "± 12654",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 4,
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
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 4,
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
            "value": 28,
            "range": "± 1",
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
            "value": 27,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 4588,
            "range": "± 385",
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
            "value": 25889,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 30,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 454375,
            "range": "± 20797",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 971814,
            "range": "± 49462",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1604912,
            "range": "± 100918",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 118058,
            "range": "± 7297",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 225437,
            "range": "± 9736",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 567333,
            "range": "± 13269",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 68071037,
            "range": "± 4648736",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 67617141,
            "range": "± 3178898",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 69026901,
            "range": "± 2999925",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 399,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 838,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 4416,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 303,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 399,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 29626,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 107381,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 224263,
            "range": "± 10380",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 562206,
            "range": "± 9881",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 62776775,
            "range": "± 1450575",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 61452109,
            "range": "± 1245282",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 64270112,
            "range": "± 3691458",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 6835,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 13792,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 34943,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 3832831,
            "range": "± 126627",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 3979896,
            "range": "± 192879",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 4020440,
            "range": "± 167227",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 4660,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 9850,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 16466,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1538064,
            "range": "± 59393",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1521061,
            "range": "± 136380",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1562818,
            "range": "± 27176",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 44071320847,
            "range": "± 476989393",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 404564998,
            "range": "± 9298244",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 24772553304,
            "range": "± 515952656",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 7127396766,
            "range": "± 195441052",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 275367425,
            "range": "± 8932623",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 242883673,
            "range": "± 8243324",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1189016507,
            "range": "± 43984163",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 256 of 2^13",
            "value": 2861242310,
            "range": "± 53495654",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 122270245,
            "range": "± 8426741",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 1054560865,
            "range": "± 28547756",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 2682635162,
            "range": "± 47652333",
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
          "id": "a804bbf6bceaf79353a796745c3639d735659c3e",
          "message": "chore(snarkvm): bump version for new release",
          "timestamp": "2023-06-15T18:41:22-07:00",
          "tree_id": "153399338674a4050ef6361c853591ae4d7a030d",
          "url": "https://github.com/catnodes/snarkVM/commit/a804bbf6bceaf79353a796745c3639d735659c3e"
        },
        "date": 1686910859704,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 122885674,
            "range": "± 1791314",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 863725169,
            "range": "± 9659009",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 1547611929,
            "range": "± 30656450",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 2409600135,
            "range": "± 22661565",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 3017834538,
            "range": "± 28363724",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 3427898198,
            "range": "± 40755062",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 6286329426,
            "range": "± 55679076",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 11281610878,
            "range": "± 73867313",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 79187015,
            "range": "± 1296151",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 610866361,
            "range": "± 30541353",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 5672740253,
            "range": "± 196133058",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 4",
            "value": 108339,
            "range": "± 3675",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 10",
            "value": 276401,
            "range": "± 10487",
            "unit": "ns/iter"
          },
          {
            "name": "snark_universal_setup",
            "value": 1941423108,
            "range": "± 21216807",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_100",
            "value": 105003417,
            "range": "± 2723553",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_1000",
            "value": 699141170,
            "range": "± 16546135",
            "unit": "ns/iter"
          },
          {
            "name": "snark_circuit_setup_10000",
            "value": 11439750180,
            "range": "± 62362723",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/compressed",
            "value": 1944,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_serialize/uncompressed",
            "value": 1523,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_checked",
            "value": 1775119,
            "range": "± 43794",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/compressed_unchecked",
            "value": 1056319,
            "range": "± 25289",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_checked",
            "value": 625743,
            "range": "± 16497",
            "unit": "ns/iter"
          },
          {
            "name": "snark_vk_deserialize/uncompressed_unchecked",
            "value": 3947,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100",
            "value": 8314212,
            "range": "± 236294",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_1000",
            "value": 22461140,
            "range": "± 370443",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_10000",
            "value": 186709320,
            "range": "± 2286531",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_prove_100000",
            "value": 1130024044,
            "range": "± 18801502",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100",
            "value": 8997801,
            "range": "± 205129",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_1000",
            "value": 11381295,
            "range": "± 284715",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_10000",
            "value": 44705500,
            "range": "± 1539883",
            "unit": "ns/iter"
          },
          {
            "name": "snark_certificate_verify_100000",
            "value": 331106102,
            "range": "± 4886338",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 14035256,
            "range": "± 380831",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 481248,
            "range": "± 7197",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 1100951599,
            "range": "± 15921619",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 120119,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 230823,
            "range": "± 7689",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 312710,
            "range": "± 10681",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 87372,
            "range": "± 3845",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 86138,
            "range": "± 3068",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 172836,
            "range": "± 8397",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 204528,
            "range": "± 15989",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 261752,
            "range": "± 6870",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 99144,
            "range": "± 2674",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 99666,
            "range": "± 2817",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 198052,
            "range": "± 4538",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 197591,
            "range": "± 5197",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 247546,
            "range": "± 5839",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 216083,
            "range": "± 6699",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 217687,
            "range": "± 6053",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 315589,
            "range": "± 13669",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 321871,
            "range": "± 6993",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 323812,
            "range": "± 10882",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 4398491,
            "range": "± 160039",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 6593475,
            "range": "± 129158",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 28567476,
            "range": "± 267342",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 129742057,
            "range": "± 1850297",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 1568003855,
            "range": "± 30864627",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 13251205423,
            "range": "± 115849202",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 4353797,
            "range": "± 110524",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 6831398,
            "range": "± 204445",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 29515395,
            "range": "± 711418",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 130427842,
            "range": "± 3446600",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 1577934808,
            "range": "± 7926413",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 13437948711,
            "range": "± 74001741",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 4411137,
            "range": "± 229796",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 7537247,
            "range": "± 139039",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 27893761,
            "range": "± 493210",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 129707496,
            "range": "± 2223073",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 1572950736,
            "range": "± 12049162",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 13405250922,
            "range": "± 57957949",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 4297947,
            "range": "± 46604",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 6083561,
            "range": "± 273743",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 32782165,
            "range": "± 491539",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 190728631,
            "range": "± 4778598",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 1533152196,
            "range": "± 27979886",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 13365986942,
            "range": "± 161357609",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 4266251,
            "range": "± 67970",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 6171127,
            "range": "± 87835",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 88319747,
            "range": "± 1232077",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 132926148,
            "range": "± 3230089",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 1504555094,
            "range": "± 12090984",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 13269339036,
            "range": "± 72553153",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 4526262,
            "range": "± 86796",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 6363336,
            "range": "± 145411",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 25804294,
            "range": "± 464991",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 129994245,
            "range": "± 2025025",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 1993398719,
            "range": "± 18363405",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 12636795311,
            "range": "± 106620339",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 7655509,
            "range": "± 1211323",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 9638061,
            "range": "± 785586",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 31531490,
            "range": "± 1011845",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 135141763,
            "range": "± 3039918",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 1154936240,
            "range": "± 18091495",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 15516261679,
            "range": "± 116087978",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 4427674,
            "range": "± 52426",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 44651555,
            "range": "± 513061",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 442846486,
            "range": "± 5528765",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 4416870048,
            "range": "± 19793311",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 44165448352,
            "range": "± 107466413",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 4383934,
            "range": "± 36864",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 44723267,
            "range": "± 570271",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 440088631,
            "range": "± 4883209",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 4405965638,
            "range": "± 30901761",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 44169119692,
            "range": "± 169435547",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 4452533,
            "range": "± 74320",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 44336543,
            "range": "± 831003",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 438235110,
            "range": "± 8112409",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 4433966884,
            "range": "± 36502908",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 44342317544,
            "range": "± 254798902",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 4506576,
            "range": "± 34964",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 44346121,
            "range": "± 724564",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 444223381,
            "range": "± 6300049",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 4428801985,
            "range": "± 45053943",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 44449553213,
            "range": "± 189305789",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 4719015,
            "range": "± 91030",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 46142643,
            "range": "± 562761",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 462384791,
            "range": "± 8031926",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 4673001039,
            "range": "± 63606781",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 46457860136,
            "range": "± 463679143",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 6909301,
            "range": "± 465674",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 59209427,
            "range": "± 1924880",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 603615443,
            "range": "± 8253830",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 6160909445,
            "range": "± 131623534",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 62314046066,
            "range": "± 1177036066",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 4251778,
            "range": "± 83549",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 4285539,
            "range": "± 72190",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 4317480,
            "range": "± 100117",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 4198666,
            "range": "± 70770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 4279106,
            "range": "± 89364",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 4234703,
            "range": "± 70853",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 6008596,
            "range": "± 100426",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 5981392,
            "range": "± 84021",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 5926066,
            "range": "± 167652",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 5976991,
            "range": "± 107150",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 4270417,
            "range": "± 108509",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 6351201,
            "range": "± 152500",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 25980906,
            "range": "± 484945",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 25916354,
            "range": "± 417260",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 25879665,
            "range": "± 375841",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 4377317,
            "range": "± 126408",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 6358590,
            "range": "± 131052",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 26123722,
            "range": "± 561202",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 132819473,
            "range": "± 3144151",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 130088702,
            "range": "± 2290961",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 4411894,
            "range": "± 85706",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 6171250,
            "range": "± 99708",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 28381775,
            "range": "± 673122",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 138431291,
            "range": "± 2505250",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8612",
            "value": 1082120789,
            "range": "± 12892252",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 4537201,
            "range": "± 92185",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 8294859,
            "range": "± 140419",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 53576595,
            "range": "± 692853",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 258239056,
            "range": "± 5414371",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 2431449160,
            "range": "± 17805916",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 4239007,
            "range": "± 94256",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 4294002,
            "range": "± 79419",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 4388160,
            "range": "± 21344",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 4353913,
            "range": "± 134871",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 4241317,
            "range": "± 59611",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 4214631,
            "range": "± 74954",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 4209160,
            "range": "± 62034",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 4259621,
            "range": "± 79240",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 4257558,
            "range": "± 83312",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 4168517,
            "range": "± 135511",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 4312933,
            "range": "± 93459",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 4267573,
            "range": "± 119937",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 4335904,
            "range": "± 83842",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 4345745,
            "range": "± 72554",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 4258750,
            "range": "± 72949",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 4303656,
            "range": "± 65449",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 4381946,
            "range": "± 102328",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 4321549,
            "range": "± 79671",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 4318775,
            "range": "± 85177",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 4286075,
            "range": "± 88582",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 4366016,
            "range": "± 170326",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 4324111,
            "range": "± 50021",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 4328343,
            "range": "± 66520",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 4297915,
            "range": "± 59213",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 4433327,
            "range": "± 75741",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 4304759,
            "range": "± 70964",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 4438539,
            "range": "± 74294",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 4284607,
            "range": "± 77544",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 4803866,
            "range": "± 129665",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 4350536,
            "range": "± 80172",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 5270248,
            "range": "± 187004",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 4264114,
            "range": "± 62196",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 212552,
            "range": "± 8873",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 234426,
            "range": "± 16236",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 1243,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 926,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 578,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 97329,
            "range": "± 3980",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 2013599,
            "range": "± 65464",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 599827,
            "range": "± 50791",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 4771,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 3371,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 2131,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_sub_noborrow",
            "value": 9,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_num_bits",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 76,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 67,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 12333,
            "range": "± 566",
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
            "value": 90285,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 47,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 92,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 270,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 158,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 6967,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 201,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 4835,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 25887,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 278,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 222,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 13663,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 145925,
            "range": "± 9165",
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
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 6,
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
            "value": 39,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_double",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_square",
            "value": 40,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 6652,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 36648,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 27,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 44,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 659993,
            "range": "± 27311",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 1318252,
            "range": "± 51666",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 2260798,
            "range": "± 87688",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 165813,
            "range": "± 3424",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 308736,
            "range": "± 5282",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 798946,
            "range": "± 10725",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 92521910,
            "range": "± 1694673",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 93601957,
            "range": "± 1127119",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 94307546,
            "range": "± 1290181",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 552,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 1180,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 6125,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 416,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 574,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 40579,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 149783,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 307827,
            "range": "± 5081",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 793967,
            "range": "± 24281",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 87311475,
            "range": "± 558826",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 87420005,
            "range": "± 1328060",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 89047132,
            "range": "± 1250083",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 9876,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 19532,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 49245,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 5355369,
            "range": "± 145974",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 5403350,
            "range": "± 74546",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 5592141,
            "range": "± 89791",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 6558,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 13529,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 23306,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 2122638,
            "range": "± 35245",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 2094302,
            "range": "± 48029",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 2292924,
            "range": "± 40877",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - deploy",
            "value": 59639495374,
            "range": "± 445140422",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction verify - deployment",
            "value": 566101447,
            "range": "± 9819278",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction - execution (transfer)",
            "value": 33422376911,
            "range": "± 184641141",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 9438935446,
            "range": "± 77827601",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 371136861,
            "range": "± 6101836",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 10 of 2^13",
            "value": 318426925,
            "range": "± 5700517",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 100 of 2^13",
            "value": 1589842011,
            "range": "± 119780080",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Accumulate 256 of 2^13",
            "value": 3771552440,
            "range": "± 29309701",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 156666820,
            "range": "± 1724629",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 1389458374,
            "range": "± 13226952",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 3595654991,
            "range": "± 110611605",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
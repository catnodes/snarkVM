window.BENCHMARK_DATA = {
  "lastUpdate": 1686043213079,
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
      }
    ]
  }
}
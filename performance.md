Current:

```t
▶ Empty filter
  ✔ should return all posts if filter is empty (357.8667ms)
▶ Empty filter (359.1601ms)

▶ Filter with title
  ✔ should return all posts if title is empty (276.018ms)
  ✔ should return all posts if searching for "post" in lowercase (350.6696ms)
  ✔ should return all posts if searching for "Post" in uppercase (332.8034ms)
  ✔ should return nothing if searching for "NON_EXISTING_POST" (230.2956ms)
  ✔ should return matching posts if searching for "9" (267.3862ms)
▶ Filter with title (1458.1795ms)

▶ Filter with kind
  ✔ should return matching posts if kind is "report" (311.3647ms)
  ✔ should return matching posts if kind is "gallery" (238.9045ms)
  ✔ should return matching posts if kind is "video" (267.6542ms)
  ✔ should return matching posts if kind is "banner" (261.8534ms)
  ✔ should return matching posts if kind is "informative" (246.4628ms)
▶ Filter with kind (1327.2159ms)

▶ Filter with category
  ✔ should return matching posts if searching for "Notícia" (253.4951ms)
  ✔ should return nothing if searching for "NON_EXISTING_CATEGORY" (250.4885ms)
▶ Filter with category (504.4815ms)

▶ Filter with target
  ✔ should return matching posts if searching for "Aluno" (224.0426ms)
  ✔ should return nothing if searching for "NON_EXISTING_TARGET" (223.8996ms)
▶ Filter with target (448.5228ms)

▶ Filter with publishedAtStart
  ✔ should return matching posts if publishedAtStart (345.462ms)
  ✔ should return nothing if publishedAtStart is in the future (337.3074ms)
▶ Filter with publishedAtStart (683.2019ms)

▶ Filter with publishedAtEnd
  ✔ should return matching posts if publishedAtEnd (421.3362ms)
  ✔ should return nothing if publishedAtEnd is in the past (320.4357ms)
▶ Filter with publishedAtEnd (742.1562ms)

▶ Filter with createdAtStart
  ✔ should return matching posts if createdAtStart (397.5813ms)
  ✔ should return nothing if createdAtStart is in the future (305.2589ms)
▶ Filter with createdAtStart (703.2428ms)

▶ Filter with createdAtEnd
  ✔ should return matching posts if createdAtEnd (424.9886ms)
  ✔ should return nothing if createdAtEnd is in the past (287.6213ms)
▶ Filter with createdAtEnd (713.091ms)

▶ Combining filters
  ✔ Using title and kind (234.0088ms)
  ✔ Using title and category (262.4477ms)
  ✔ Using all filters (255.0562ms)
  ✔ Using publishedAtStart and publishedAtEnd (403.9878ms)
  ✔ Using createdAtStart and createdAtEnd (665.4759ms)
▶ Combining filters (1821.9706ms)

ℹ tests 28
ℹ suites 10
ℹ pass 28
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 8776.5241
```

window.initialFunctionDefinitions = "map :: (a -> b) -> [a] -> [b]"            + "\n" +
                                    "map f []     = []"                        + "\n" +
                                    "map f (x:xs) = (f x) : map f xs"          + "\n" +
                                    ""                                         + "\n" +
                                    "foldr :: (a -> b -> b) -> b -> [a] -> b"  + "\n" +
                                    "foldr f i []     = i"                     + "\n" +
                                    "foldr f i (x:xs) = f x (foldr f i xs)"    + "\n" +
                                    ""                                         + "\n" +
                                    "foldl :: (a -> b -> a) -> a -> [b] -> a"  + "\n" +
                                    "foldl f i []     = i"                     + "\n" +
                                    "foldl f i (x:xs) = foldl f (f i x) xs"    + "\n" +
                                    ""                                         + "\n" +
                                    "cons :: Int -> [Int] -> [Int]"            + "\n" +
                                    "cons x xs = x : xs"                       + "\n" +
                                    ""                                         + "\n" +
                                    "reverseCons :: [Int] -> Int -> [Int]"     + "\n" +
                                    "reverseCons xs x = x : xs"                + "\n" +
                                    ""                                         + "\n" +
                                    "plus :: Int -> Int -> Int"                + "\n" +
                                    "plus x y = x + y"                         + "\n" +
                                    ""                                         + "\n" +
                                    "addOne :: Int -> Int"                     + "\n" +
                                    "addOne x = x + 1"                         + "\n" +
                                    ""                                         + "\n" +
                                    "double :: Int -> Int"                     + "\n" +
                                    "double x = x + x"                         + "\n" +
                                    ""                                         + "\n" +
                                    "take :: Int -> [a] -> [a]"                + "\n" +
                                    "take 0 xs = []"                           + "\n" +
                                    "take n [] = []"                           + "\n" +
                                    "take n (x:xs) = (x : (take (n - 1) xs))"  + "\n" +
`
if :: Int -> a -> b -> c
if 0 a b = b
if x a b = a

times :: Int -> Int -> Int
times x 0 = 0
times x y = x + (times x (y - 1))

exponent :: Int -> Int -> Int
exponent x 0 -> 1
exponent x y -> times x (exponent x (y - 1))

minusifnotnegative :: Int -> Int -> Int
minusifnotnegative 0 y -> 0
minusifnotnegative x 0 -> x
minusifnotnegative x y -> minusifnotnegative (x - 1) (y - 1)
`;

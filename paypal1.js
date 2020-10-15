let a = [2, 2, 1, 7, 5, 3]
let k = 4
let s = test(a, a.length, k)
console.log(s);


function test(A, n, K) {
    // Create a frequency array to count 
    // occurrences of all remainders when 
    // divided by K 
    let freq = []

    // Count occurrences of all remainders 
    for (let i = 0; i < n; i++)
        ++freq[A[i] % K];

    // If both pairs are divisible by 'K' 
    let sum = freq[0] * (freq[0] - 1) / 2;

    // count for all i and (k-i) 
    // freq pairs 
    for (let i = 1; i <= K / 2 && i != (K - i); i++)
        sum += freq[i] * freq[K - i];
    // If K is even 
    if (K % 2 == 0)
        sum += (freq[K / 2] * (freq[K / 2] - 1) / 2);
    return sum;
}
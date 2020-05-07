// bu değil

const array = [1,2,3,4,5];

console.log(array);

const array = [1,2,3,4,5,6];

console.log(array);

//bu okey

//peki neden okey? çünkü yukarıdakinin tersine burada 
//bellekde yeni bir array block tanımlamıyorsun yani 
//bellekteki array refaransının adresini değiştirmiyorsun
//o hala sabit.
//sadece, işaret edilen yere push yaparak bir eleman daha ekliyorsun.
//bu yüzden js 'const' olma durumunun ihlal edildiğini düşünmüyor.

const array = [1,2,3,4,5];

array.push(6);
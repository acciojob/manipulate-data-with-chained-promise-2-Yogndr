function myPromise(){
	return new Promise((resolve)=>{
            setTimeout(()=>{
			resolve([1,2,3,4])
			
			
		},0);
		
	})
	.then((arr)=>{
		setTimeout(()=>{
			const evens=arr.filter(nums=>nums%2===0)
			const arr1=evens.join(",");
			resolve(arr1);
		},1000)
	})
	.then((arr)=>{
		setTimeout(()=>{
			const ans=arr.map(nums=>nums*2);
			resolve(ans);
		},2000)
	})
}
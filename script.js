const output=document.querySelector("#output");
function myPromise(){
	return new Promise((resolve)=>{
            setTimeout(()=>{
			resolve([1,2,3,4])
			
			
		},0);
		
	})
	.then((arr)=>{
		setTimeout(()=>{
			const evens=arr.filter(nums=>nums%2===0)
			output.textcontent=evens.join(",");
			resolve(evens);
		},1000)
	})
	.then((arr)=>{
		setTimeout(()=>{
			const ans=arr.map(nums=>nums*2);
			output.textcontent=ans.join(",");
			resolve(ans);
		},2000)
	})
}
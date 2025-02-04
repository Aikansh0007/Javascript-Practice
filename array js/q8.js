var arr=[0,1,2,1,3,12,312,3,123,123,123];
var mf=1;
var m=0;
var elem=0;
for(var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        if(arr[j]==arr[i]){
            m++;
        }
        if(m>mf){
            mf=m;
            elem=arr[i];
        }

    }
    m=0;
}
console.log(`${elem} appears ${mf} times`);
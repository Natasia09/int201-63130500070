export {cookie}

//Parameter แรกจะเป็นการกำหนด Key ให้ 
//Cookie Parameter ที่ 2 จะเป็นการกำหนด value และ Parameter ที่ 3 จะเป็นการกำหนดวันหมดอายุของ Cookie

const cookie = {
    setCookie(cname,c,dayvalues){
        const setDate = new Date();
        setDate.setTime(setDate.getTime()+ (days*24*60*1000));
        let expires = 'expires=' + setDate.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
    },
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
}
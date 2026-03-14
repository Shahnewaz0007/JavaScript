/**
 * for a given string tell me whether it has even number of character or not
 */

function evenSizedString(str){
    const size=str.length;
    if(size%2==0)
    {
        console.log('even sized string');
        return true;
    }
    else{
        console.log('odd sized string');
        return false;
    }
}

evenSizedString("hello"); // odd sized string
evenSizedString("world"); // odd sized string
evenSizedString("test"); // even sized string
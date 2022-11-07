function alpha(ch){
    OK = true;
	i = 0;
	while (OK && i < ch.length){
		if ((ch.charAt(i).toUpperCase() >= "A" && ch.charAt(i).toUpperCase() <= "Z") ){
			i++;
		}
		else{
			OK = false;
		}
	}
	return OK;
}   
function num(){
    OK = true;
	i = 0;
	while (OK && i < ch.length){
        if((ch.charAt(i) >= "0" && ch.charAt(i) <= "9")){
        i++;
    }
    else{
        OK = false;
    }
    }
}
function verif(){
    text=f.t.value;
    if(!alpha(text)|| !num(text))
    {
        alert("Write something valid!");
        return false;
    }
}
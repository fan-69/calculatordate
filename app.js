// JavaScript Document

	const sutki=1000*60*60*24; // константа милисекунд в сутках
	
	var memory=[];
	
	// получить дату из строки
	function str_tu_date(str){
	    return new Date(str);
	}
	
	function basic_calculation(d_value,coeff=1){
		var d1=new Date(d_value);

		var year=document.querySelector('#year_prigovor').value;
		var month=document.querySelector('#month_prigovor').value;
		var d2=new Date(d1.toJSON());
		d2.setFullYear(d1.getFullYear()+1*year);
		d2.setMonth(d1.getMonth()+1*month);
		var rez=Math.trunc((d2-d1)/sutki/coeff);
		var d=new Date(d1.toJSON());
		d.setDate(d.getDate() + rez);
		
		return d;
	}
	
	function difference_date(d1,d2,coeff=1){
	    return Math.trunc((d2-d1)/sutki/coeff);
	}
	
	// добавить к дате лет, месяцев, дней
	function add_tu_date(d,year=0,month=0,date=0){
        d.setFullYear(d.getFullYear()+year);
	    d.setMonth(d.getMonth()+month);
	    d.setDate(d.getDate()+date);
        return d;
	}
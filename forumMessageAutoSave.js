if(localStorage) { //проверяем работоспособность localStorage
	let x = localStorage['autoSaveForum']; //помещаем в переменную наще хранилище
	let a = [$('#message'),$('.wysibb-text-iframe').contents().find('body');]; //типы редакторов wsibb или html
	let b = a[0].is(':visible') ? a[0] : a[1]; //проверка на тип редактора
	function autosave(a) {x = a}; //функция для помещения текста сообщения в хранилище
	let c = x ? b.html(x); //при загрузке страницы восстанавливаем текст сообщения
	b.keyup(autosave(b.html())); //вызываем функция для сохранения сообщения
}

//Коды статуса компиляции
const CompilingStatus={
	//ошибка компиляции
	compilationError:6,
	//успешная компиляция
	succes:3,
	//стороняя ошибка
	error:5,
	//превышен допустимый дневной лимит запросов
	manyRequest:429,
}
exports.CompilingStatus = CompilingStatus
import penguin from '../img/Avatars/penguin.svg'
import frog from '../img/Avatars/frog.svg'
import anteater from '../img/Avatars/anteater.svg'
import crocodile from '../img/Avatars/crocodile.svg'
import chameleon from '../img/Avatars/chameleon.svg'
import owl from '../img/Avatars/owl.svg'
import tortoise from '../img/Avatars/tortoise.svg'
import elephant from '../img/Avatars/elephant.svg'
import shark from '../img/Avatars/shark.svg'
import fish from '../img/Avatars/fish.svg'
import toucan from '../img/Avatars/toucan.svg'
import cobra from '../img/Avatars/cobra.svg'
import stingray from '../img/Avatars/stingray.svg'
import squirrel from '../img/Avatars/squirrel.svg'
import duck from '../img/Avatars/duck.svg'
import sheep from '../img/Avatars/sheep.svg'

// Пользовательский хук служащий для отрисовки автатарки по имени пользователя
function useAvatar(name){
	switch(name){
		case 'Загорелый пингвин':
			return penguin;
		case 'Равнодушная лягушка':
			return frog;
		case 'Безудержный муравьед':
			return anteater;
		case 'Суетной крокодил':
				return crocodile;
		case 'Мутный хамелеон':
			return chameleon;
		case 'Внушительный филин':
			return owl;
		case 'Неуловимая чарепаха':
			return tortoise;
		case 'Скрытный слон':
			return elephant;
		case 'Заинтересованная акула':
				return shark;
		case 'Сухопутная рыба':
			return fish;
		case 'Приземленный тукан':
			return toucan;
		case 'Прямолинейная кобра':
			return cobra;
		case 'Забагованный скат':
			return stingray;
		case 'Рекурсивная белка':
			return squirrel;
		case 'Относительная утка':
				return duck;
		case 'Виртуозный барашек':
			return sheep;
	}
}

export {useAvatar};
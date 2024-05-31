let directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

console.log(directors);


function directorsList2(){
  const container = document.getElementById("directorsListId");
  directors.map((direct)=>{
    const directorCard = document.createElement("div");
    directorCard.className = "directorCard";
    //directorCard.textContent = `
    //Карьера: ${direct.name}`;
    container.append(directorCard);
    const directorName = document.createElement("li");
    directorName.textContent = `${direct.name}`;
    directorCard.appendChild(directorName);
    const directorCareer = document.createElement("h5");
    directorCareer.textContent = `Карьера: ${direct.career}`;
    directorCard.appendChild(directorCareer);
    const directorTop = document.createElement("p");
    directorTop.textContent = `Самый кассовый фильм: ${direct.top_rated_film}`;
    directorCard.appendChild(directorTop);
    const directorFilms = document.createElement("a");
    //directorFilms.textContent = `Самый кассовый фильм: ${direct.films}`;
    directorFilms.title = 'фильмография';
    directorFilms.href = direct.films;
    //directorFilms.textContent = `${direct.films}`;
    let linkText = document.createTextNode("фильмография");
    directorFilms.appendChild(linkText);
    directorCard.appendChild(directorFilms);
  })
  let topFilmsList = directors.map(dir=>dir.top_rated_film).join(", ");
  console.log(topFilmsList);
  let filmsShow = document.getElementById('tpFilmsID');
  filmsShow.innerHTML = topFilmsList;
}
directorsList2()





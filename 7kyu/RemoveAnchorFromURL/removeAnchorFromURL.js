//Дополните функцию/метод так, чтобы он возвращал URL-адрес, удалив все, что находится после символа #.


const removeUrlAnchor = url => url.indexOf("#")!== -1 ? url.slice(0, url.indexOf("#")) : url;

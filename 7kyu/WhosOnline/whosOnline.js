//У вас есть приложение группового чата, но кто сейчас онлайн!?
//Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!
//На основе входных данных массива объектов, содержащих имена пользователей, статус и время с момента последней активности (в минутах),
// создайте функцию для определения того, кто находится онлайн, офлайн и отошел от компьютера.
//Если кто-то находится в сети, но его последняя активность была более 10 минут назад, его следует считать отсутствующим.
//Имя пользователя всегда будет строкой, статус всегда будет либо «в сети», либо «не в сети», а lastActivity всегда будет числом >= 0.
//Наконец, если в вашем чат-приложении нет друзей, входными данными будет пустой массив []. В этом случае следует вернуть пустой объект {}.

const friends =[
{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}
]

const whosOnline = (friends) => {
  const filtered = {
    online: [],
    offline: [],
    away: []
  }

  if (friends.length === 0) {
    return {};
  }

  for(let i = 0; i < friends.length; i++) {
    if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
      filtered.online.push(friends[i].username);
    } else if (friends[i].status === 'offline') {
      filtered.offline.push(friends[i].username);
    } else if (friends[i].lastActivity > 10) {
      filtered.away.push(friends[i].username);
    }
  }
  if (filtered.online.length === 0) {
    delete filtered.online;
  } else if (filtered.offline.length === 0) {
    delete filtered.offline;
  } else if (filtered.away.length === 0) {
    delete filtered.away;
  }
  return filtered;
}

// шоб в строку не выводилось
onhashchange = e => {
    history.replaceState(null,"", e.oldURL);
  }
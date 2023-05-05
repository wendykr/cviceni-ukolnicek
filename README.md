# Doporučené úložky na doma

Domácí úkol pro kurz JavaScript 2 od Czechitas.

## 3. Úkolníček

Vaším úkolem bude vytvořit dle zadání jednoduchou aplikaci zobrazující seznam úkolů.

- Vytvořte si repozitář ze šablony [cviceni-ukolnicek](https://github.com/Czechitas-podklady-WEB/cviceni-ukolnicek).
- Seznamte se se strukturou projektu. Především si prohlédněte strukturu HTML.
- Prohledněte si data, která vrací [API pro úkoly](https://apps.kodim.cz/daweb/trening-api/docs/ukoly-api).
- V hlavním souboru `index.js` vytvořte komponentu `Task`, která bude představovat jeden úkol. Komponenta bude jako svoje `props` očekávat objekt s jedním úkolem.
- Vytvořte funkci `renderTasks`, která obdrží seznam úkolů a zobrazí je na stránce pomocí komponenty `Task`.
- Stáhněte si z API seznam úkolů a pomocí `renderTasks` je zobrazte na stránce.
- Seznamte se s tím, jak API filtruje úkoly podle toho, zda jsou splněné či nikoliv.
- Zařiďte, že při zaškrtnutí přepínače *Pouze nesplněné* se zobrazí pouze nesplněné úkoly. Bude potřeba ve správnou chvíli znovu zavolat funkci `fetch` a poté `renderTasks` s novými daty.
- Pokud uživatel odškrtne přepínač, měly by se zobrazit opět všechny úkoly.
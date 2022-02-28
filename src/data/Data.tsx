import { IData } from '../interface/Interface';

export const ExampleData: IData[] = [
    { 
      "id": 100795229,
      "from": "Kalkulator OC/AC - Onet <mailingi@onet.pl>",
      "sent_date": "2021-12-13 09:00:03",
      "is_unread": false,
      "subject": "Zaoszczędź! OC już od 230 zł",
      "snippet": "Odbierz 50% rabatu na wymianę online"
    },
    { 
      "id": 100795227,
      "from": "Walutomat - Onet <mailingi@onet.pl>",
      "sent_date": "2021-12-13 09:00:02",
      "is_unread": false,
      "subject": "Wymień walutę szybko i tanio",
      "snippet": "Odbierz 50% rabatu na wymianę online"
    } 
]


/* 
a spotkaniu będziesz mógł spodziewać się zadania praktycznego.

Zadanie będzie polegało na wygenerowaniu listy z danych zamockowanych w kodzie
Każdy element listy będzie miał checkboxa (checkbox zaznaczony lub nie na podstawie pola is_unread)
Trzeba będzie obsłużyć zmianę checkboxa
Wyświetlić informacje: ile elementów na liście jest aktualnie zaznaczonych
Obsłużyć routing - przechodzenie z listy do detalu danego elementu i na odwrót
Przykład danych do wyświetlenia:

[
  {
    
    "id": 100795229,
    "from": "Kalkulator OC/AC - Onet <mailingi@onet.pl>",
    "sent_date": "2021-12-13 09:00:03",
    "is_unread": false,
    "subject": "Zaoszczędź! OC już od 230 zł",
    "snippet": ""
  },
  {
    
    "id": 100795227,
    "from": "Walutomat - Onet <mailingi@onet.pl>",
    "sent_date": "2021-12-13 09:00:02",
    "is_unread": false,
    "subject": "Wymień walutę szybko i tanio",
    "snippet": "Odbierz 50% rabatu na wymianę online"
  }
]
6. Przykładowe dane mają tylko dwa elementy, ale równie dobrze mogłoby ich być 100, 1 000 lub 10 000
7, Na rozmowie będziemy mówić o jego rozwiązaniu
8, Wybór technologii: React, reszta wg. Twoich preferencji, używanie internetu jest możliwe a nawet wskazane.
9. Można przygotować kod przed rozmową rekrutacyjna lub napisać go na samej rozmowę.

 

Gdyby pojawiły się jakieś pytania, możesz się ze mną śmiało kontaktować :) */
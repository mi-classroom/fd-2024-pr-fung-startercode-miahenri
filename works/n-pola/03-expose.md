# Prototypischen Entwicklung eines Systems zur Identifikation von Bouldern und Kletterrouten in geschlossenen Räumlichkeiten mit Hilfe von Smartphones

## Problemfeld und Kontext
Bei den Sportarten Bouldern und (Sport-)klettern ist es das Ziel, eine vordefinierte Route, also eine Sammlung von festgelegten Griffen, Tritten und anderen Elementen, mit möglichst wenig Versuchen zu erklimmen. Bouldern findet ohne Seil und in vergleichsweise geringen und ungefährlichen Höhen statt. Der Boden in einer Halle besteht aus einem weichen Material, sodass Stürze gedämpft werden und man die Sportart alleine ausführen kann. Für das Sportklettern hingegen braucht man einen Partner, da es in deutlich größere Höhen geht und man permanent mit einem Seil gesichert werden muss.

Um die Schwierigkeit einer Route zu definieren, welche sich aus der Art der Griffe, der Art der Bewegungen, dem Überhang der Wand und vielen weiteren Faktoren ergibt, werden diese von Personen, die diese Route bestiegen haben, oder dem Personal, welche die Route in einer Kletterhalle erstellt haben, bewertet. Anhand dieser Bewertungen können die Sportler Routen auswählen, Ihren Fortschritt feststellen und sich mit anderen vergleichen. Diese Bewertungen sind jedoch sehr subjektiv und können von der von einem Großteil der Sportler wahrgenommenen Schwierigkeit abweichen.
  
Grundsätzlich gibt es in diesem Kontext bereits Applikationen, welche versuchen das Klettererlebnis zu digitalisieren, aber keine bietet Features, welche die Schwierigkeit eines Boulders oder einer Kletterroute dynamisch, also anhand von Faktoren wie der Anzahl der erfolgreichen oder fehlgeschlagenen Versuche eines Sportlers und dessen, anhand von Erfolgen und Misserfolgen bestimmten, Können, bestimmen kann.
Zudem setzten die meisten Applikationen voraus, dass eine Kletterhalle sich dort anmeldet und ihre Boulder und Routen pflegt. Somit wäre eine Applikation, welche durch die Community von Sportlern betrieben werden kann und die in der Lage ist, dynamisch den Schwierigkeitsgrad anzupassen ein interessantes Vorhaben.

Zentrale Funktion solcher Applikationen und ein Aspekt, der deutlich verbessert werden kann, ist das "Einchecken" beziehungsweise Erkennen und Finden einer gewünschten Route oder eines Boulders. Dies geschieht momentan lediglich per Namen der Route, Schwierigkeitsgrad und Namen der Wand, an der sich eine Route oder Boulder befindet. Der Nutzer muss all diese Aspekte kennen und eingeben, um das gewünschte Objekt in einer Applikation zu finden. Dies kann teilweise lange dauern, bietet kein gutes Nutzererlebnis und kann bei fehlenden Informationen zu keinem Ergebnis führen. Erst nachdem das gewünschte Objekt in der Applikation gefunden wurde, können die eigentlichen Funktionen der Applikation in Anspruch genommen werden.

## Ziel
Das Ziel dieses Praxisprojekts ist, diverse Methode zur Lokalisierung eines Boulders oder einer Kletterroute zu erarbeiten, diese anhand von festgelegten Kriterien zu evaluieren und dann prototypisch die besten zwei Methoden zu implementieren. Idealerweise sollten diese Prototypen dann in einer realen Kletterhalle verprobt werden.

## Aufgabenstellung
Anhand des Kontextes und der Ziele lässt sich folgende zentrale Forschungsfrage bilden:

<cite>**"Welche technische Möglichkeit ist am besten zum schnellen Assoziieren eines Boulders mit seiner Repräsentation in der Applikation geeignet?"**</cite>

Konkret lassen sich nun aus den Zielen und der Forschungsfrage verschiedene Unterfragen ableiten, welche im Rahmen dieses Projektes beantwortet werden sollen:
* Anhand von welchen Kriterien lassen die gewählten Methoden evaluieren?
* Welche Möglichkeit eignet sich am besten für eine Plattform, welche nicht das Zutun einer Kletterhalle voraussetzt?
* Wie lässt sich ein umgebungsabhängiger Prototyp außerhalb dieser Umgebung geeignet Testen?
* Wie lässt sich ein Boulder oder eine Kletterroute ohne physikalische zusätzliche Hilfsmittel in einer Applikation erkennen?

 <!-- TODO: weitere Unterfragen -->

## Lösungansätze und Ressourcen
Im Folgenden ist eine Reihe von ersten möglichen Methoden zur Lokalisierung zu finden. Diese Methoden basieren alle auf dem Vorhaben, eine Route/einen Boulder mit Hilfe eines Smartphones ohne zusätzliche Sesoren an dem Geräte eines Nutzers, zu erkennen.
Die Methoden ließen sich in der Theorie miteinander kombinieren, um präzisere Ergebnisse zu erhalten. Ebenso ließen sie sich mit weiteren internen Sensoren eines Smartphones kombinieren, wie zum Beispiel dem Kompass, welcher nützlich sein könnte, um zu bestimmen, auf welche Wand ein Nutzer gerade schaut.
### QR Codes
Eine einfach und rudimentäre Möglichkeit zum Identifizieren der gewünschten Objekte wäre das Anbringen von QR Codes an den Startgriffen der entsprechenden Route oder des entsprechenden Boulders. Dieser ließe sich problemlos mit einem Smartphone einscannen und mir der Repräsentation in einer App verbinden. Jedoch setzt diese Methode das Mitmachen der Kletterhallen voraus, sowohl beim Anbringen der QR Codes, als auch beim Pflegen der Routen/Boulder.

### NFC Tags
Ähnlich simpel wäre eine Lösung mittels NFC Tags, welche an den Startgriffen angebracht sind. Diese könnten aufgrund ihrer geringen Größe in bereits bestehende Schilder, welche den Schwierigkeitsgrad angeben, integriert werden. Ebenso wie bei einer Lösung mittels QR Codes ist hier eine gewisse Form von Mitarbeit seitens der Kletterhallen erforderlich. Zudem erfordert diese Technologie, dass die Sportler unmittelbar an der Route oder dem Boulder sein müssen, was in größeren Gruppen teilweise störend sein könnte.

### Indoor Position System - "Indoor GPS"
Eine Technologie, welche es ermöglicht die Position von Smartphones, und damit die Ihrer Nutzer, innerhalb geschlossener Räume ausreichend genau zu bestimmen, sodass dem Nutzer die Routen und Boulder angezeigt werden können, welche sich in seiner Nähe befinden. Zudem ließe sich auch eine Art von Navigation umsetzten, welche es den Nutzer ermöglich würde, Boulder und Routen einfacher in einer Halle zu finden, welche Ihnen zum Beispiel durch ein Recommendation Sytem empfohlen wurden. Diese Lösungen sollten auf in Smartphones bereits vorhandenen Sensoren basieren.

#### BLE Beacons
BLE (Bluetooth low energy) Beacons sind Geräte, welche auf Basis des BLE Funkstandards permanent ein Signal ausgeben, welches einen eindeutigen Identifier enthält, um die Beacons voneinander zu unterscheiden. Anhand der Signalstärke der unterschiedlichen Beacons kann ein Smartphone nun seine eigene Position feststellen und die Boulder/Routen, welche sich zum Beispiel in einem frei definierbaren Radius befinden, anzeigen. Voraussetzung dafür ist, dass die Position der Beacons bekannt und fest definiert ist und die Position eines Boulders oder einer Route im System definiert ist. Diese Methode erfordert einen initialen Aufwand einer Kletterhalle, welche die Beacons anbringen müsste und grob den Grundriss der Kletterwände angeben müsste. Danach könnten Objekte durch Mitarbeiter, aber auch durch Sportler gepflegt werden.

#### WLAN
Ein ähnliches Prinzip ließe sich mittels WLAN umsetzten. Hier könnte man eventuell auf bereits vorhandene Infrastruktur setzen, jedoch ist es fraglich, ob man mittels WLAN eine ausreichend hohe Präzision erreichen kann. Wenn dies nicht der Fall ist oder wenn keine Infrastruktur vorhanden ist, fallen zudem deutlich höhere Kosten im Vergleich zu BLE Beacons an.

#### Auditive Positionierung
Eine auditive Positionierung lässt sich theoretisch durch das Wiedergeben verschiedener, für Menschen nicht hörbarer, Frequenzen realisieren. Dazu werden in einem Raum Geräte verteilt, welche je eine eindeutige Frequenz ausgeben, welche dann von dem Mikrofon eines Smartphones aufgenommen werden können und anhand der unterschiedlichen Amplituden der Signale kann dann versucht werden, eine Position im Raum zu bestimmen.

### Object Detction / AR
Im Folgenden sind eine Reihe von Ansätzen, welche auf einem Livevideo der Smartphonekamera und Computer Vision basieren, aufgelistet.
#### Route/Boulder Recognition auf Raster
Kletterwände sind in der Regel mit vorgefertigten Bohrungen versehen, welche in regelmäßigen vertikalen und horizontalen Abständen zu finden sind. Diese könnten dazu genutzt werden, ein Raster auf einer Wand zu bestimmen und so die Position der Griffe an der Wand anhand des Rasters zu erfassen. Eine Erfassung der Griffe durch Farbe und Kontrast zu der Wand könnte die Präzision erhöhen. So könnte der Nutzer die Wand mit seinem Smartphone im "Scanmodus" filmen und es könnten die boulder/Routen an der Wand markiert werden, welche zuvor von einem anderen Nutzer eingetragen wurden, sodass der Nutzer nun das gewünschte Objekt auswählen kann.
Diese Lösung würde kein Zutun einer Kletterhalle erfordern und somit eine communitydriven App ermöglichen.

#### Fingerprinting von Startgriffen
Eine Route oder ein Boulder startet immer an ein bis zwei fest definiert den Startgriffen, an welchen sich zum Beginn die Hände des Sportlers befinden müssen. In Wettkampfumgebung können es auch vier Startmarkierungen sein, wobei zum Start jede Markierung mit einer Hand oder einem Fuß berührt werden muss. 
Nun ist die Überlegung, ob die visuellen Eigenschaften der Startgriffe, also zum Beispiel die Farbe, Winkel der Griffe, Form der Griffe und Features der Umgebung, also markante Punkte, ausreichen könnten, um eine Route/einen Boulder eindeutig zu identifizieren. Diese Lösung würde auf einem initialen Einscannen der Griffe basieren und könnte unabhängig vom Zutun einer Kletterhalle eingesetzt werden.
In der Anwendung würde der Nutzer dann im "Scanmodus" die Griffe filmen und sobald ein passender Treffer gefunden wurde, wird dieser geöffnet.
Dieser Ansatz ist besonders für Kletterrouten interessant, da es unmöglich ist, die ganze Route mit einer Smartphonekamera zu erfassen.

#### Infrarot
An den äußersten Ecken der Kletterwände oder eines Abschnitts einer Kletterwand könnten kleine Infrarot LEDs angebracht werden, welche für das menschliche Augen nicht sichtbar sind, aber von Smartphonekameras erkannt werden können. Eine der LEDs könnte in binärer Form in gewissen Intervallen einen eindeutigen Identifier übergeben.
Diese LEDs würden die Abgrenzungen der Wand bestimmen und so die Möglichkeit bieten, diese in einer AR-Implementation zu erkennen und Objekte auf der Wand zu markieren.
Hier würde ein initialer Aufwand bei den Kletterhallen entstehen, aber danach könnte ein Betrieb ohne Zutun der Kletterhallen ermöglicht werden. Jedoch könnte sich das Erkennen des eindeutigen Identifiers aufgrund von Eigenschaften von Smartphonekameras, wie Wiederholrate und Verschlusszeit, als kompliziert herausstellen.

## Chancen und Risiken
Das Projekt bietet die Chance, eine Grundlage für eine neue und moderne Applikation im Kontext des Klettersports zu legen, welche im Bachelor weiterentwickelt werden könnte, und dabei neue Techniken und Methoden zu erforschen und diese mit bereits Gelerntem zu kombinieren. Zudem könnte das Projekt unter der Voraussetzung, dass es der Open Source Community zur Verfügung gestellt wird, die Chance bieten, ein Standard für Kletterapplikationen aller Art zu werden.

Der Erfolg dieses Vorhabens ist, je nach Ausgang der Analyse maßgeblich von dem Interesse und der Annahme des Produktes von Mitarbeitern, Hallen und Sportlern abhängig. Es besteht das Risiko, dass die Hallen keinen Mehrwert in dem System sehen und es somit nicht einführen oder unterstützen, die Sportler keine Smartphones während des Kletterns benutzen wollen oder können oder das schlichtweg kein Interesse an den Funktionen des Produktes existiert und die Sportler dieses nicht nutzen.

Auf der anderen Seite ist die Hürde zur Entwicklung eines Systems, welches ohne Zutun einer Kletterhalle auskommt, nach meiner aktuellen Ansicht und Kenntnisstand relativ hoch und könnten dazu führen, dass am Ende kein tatsächlich funktionierender Prototyp erstellt werden kann.

## Motivation
Die Motivation zu diesem Projekt stammt aus eigenen Erfahrungen, dem eigenen Wunsch nach einem solchen System und dem Streben einen sinnvollen Beitrag zu einer Community leisten zu können, der diese womöglich verbessert und das Erlebnis Klettern erweitern könnte. Ich selber gehe seit 2018 regelmäßig Bouldern und während dieser Zeit ist mir noch kein etabliertes oder weit verbreitetes System untergekommen und nun habe ich es mir zum Ziel gesetzt, dieses Gebiet und Ideen zur Lösung der diversen Probleme tiefer zu erforschen und erste Konzepte zu einem tatsächlichen Produkt auszuarbeiten.

## Durchführungskontext und zeitliche Planung

### Setup
Dieses Projekt soll im Rahmen der TH Köln ohne einen direkten Auftraggeber, welcher einen Einfluss und direktes Interesse an dem Projekt hat, stattfinden. Dennoch soll eine lokale Kletterhalle, die Kletterwelt Sauerland in Lüdenscheid, in das Projekt als Kooperationspartner integriert werden, welche dann Ihre Bedenken und Anregungen einbringen kann, Konzepte evaluieren kann und zu einem späteren Zeitpunkt eventuell als Pilot Hallen erste Versionen testen könnte.

### Abhängigkeiten
Die Durchführung dieses Projektes ist völlig unabhängig von externen Einflüssen und Gegebenheiten. Es sind keine externen Teilhaber vorhanden und das Projekt ist auch nicht abhängig von externen Daten oder Zugängen. Lediglich die Weiterführung des Projektes im Rahmen einer Bachelorarbeit hängt von den Ergebnissen dieses Projektes ab.
Ein Test erstellter Prototypen kann unter dem Umstand, dass kein Kooperationspartner gefunden werden konnte, auch in einem simulierten Kontext stattfinden.

### Meilensteine und Zeitrahmen
Unter Berücksichtigung von Ressourcen, Risiken, Unterfragen und Aufgaben lassen sich folgende mögliche Meilensteine definieren:
* Gewinnung von möglichem Kooperationspartner für das Projekt
* Recherche und Ausarbeitung verschiedener Lösungen
* Ausarbeitung einer geeigneten Evaluationsmethode
* Evaluation der Methoden unter zuvor erarbeiteten Aspekten
* Evaluation von Implementationsmöglichkeiten zum Erstellen der Prototypen
* Prototypische Implementation der zwei besten Methoden
* Testdurchlauf der Methoden in einer Kletterhalle oder simulierter Umgebung
* Auswertung der Testdurchläufe


Aufgrund von Verpflichtungen und Aufgaben außerhalb des Hochschulkontextes und aufgrund des Bestrebens, eine umfassende und gut ausgearbeitete Arbeit abgeben zu können, wird sich der zeitliche Rahmen dieses Projekt auf schätzungsweise vier(4) bis fünf(5) Monaten belaufen.

## Arbeitsergebnis
Das Ergebnis dieses Praxisprojektes soll eine Evaluierung verschiedener Methoden zum Erkennen und Finden von Bouldern oder Kletterrouten mithilfe eins Smartphones und eine prototypische Implementierung der zwei besten Methoden in einer App sein. Diese Prototypen sollen daraufhin idealerweise in einer realen Kletterhalle getestet werden, um erste Schwachstellen und Probleme identifizieren zu können.

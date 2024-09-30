import React from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  SubPageContainer,
} from "../styles/SubPageStyles";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
import fmak_minori from "../assets/images/life/fmak_minori.jpg";

const LifePage: React.FC = () => {
  return (
    <div>
      <HamburgerMenuContainer />
      <SubPageContainer>
        <CardContainer>
          <CardImage src={fmak_minori} alt="Sample" />
          <CardText>
            Meine geliebte Minori-chan,<br /><br />

            ich finde kaum die richtigen Worte, um auszudrücken, was mein Herz für Dich empfindet. In jedem Moment, den ich mit Dir verbringe, fühle ich eine Tiefe, die ich vorher nie kannte. Du bist für mich der schönste Stern am Himmel, der mich stets leitet und mein Leben erhellt.<br /><br />

            Wie Heinrich Heine einst sagte:<br /><br />
            "Du bist wie eine Blume, so hold und schön und rein; ich schau' dich an, und Wehmut schleicht mir ins Herz hinein."<br /><br />

            Deine Anwesenheit erfüllt mein Herz mit Wärme und Frieden. Es ist, als würde ich in Deiner Nähe die Zeit vergessen, und die Welt um uns herum verliert an Bedeutung. Jedes Lächeln von Dir lässt die Sonne heller scheinen, und jeder Blick in Deine Augen ist wie ein Blick in die Unendlichkeit.<br /><br />

            "Ich liebe Dich, wie der Wind die Felder liebt, wie der Himmel die Sonne umarmt." Diese Worte spiegeln nur ansatzweise wider, was ich wirklich für Dich empfinde. In Dir habe ich meinen sicheren Hafen gefunden, einen Ort, an dem ich einfach nur sein kann – frei von allen Sorgen und Ängsten.<br /><br />

            Rainer Maria Rilke schrieb einst:<br /><br />
            "Liebe besteht nicht darin, dass man einander ansieht, sondern dass man gemeinsam in die gleiche Richtung blickt."<br /><br />
            Und genau das wünsche ich mir mit Dir – dass wir zusammen den Weg des Lebens gehen, Hand in Hand, durch Höhen und Tiefen, stets Seite an Seite. Du gibst mir die Kraft, jeden Tag aufs Neue zu erobern, und mit Dir an meiner Seite gibt es keinen Berg, den wir nicht erklimmen können.<br /><br />

            Jeder Tag mit Dir ist ein Geschenk, und ich möchte keinen einzigen Augenblick missen. Du bist die Melodie meines Lebens, der Takt, der mein Herz zum Schlagen bringt. Ich werde Dich immer lieben und ehren, denn Du bist das Beste, was mir jemals passiert ist.<br /><br />

            Mit all meiner Liebe,<br /><br />
            Dein*e Fmak<br /><br />
          </CardText>
        </CardContainer>
      </SubPageContainer>
    </div>
  );
};

export default LifePage;

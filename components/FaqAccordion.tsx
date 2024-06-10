import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
} from "@gluestack-ui/themed";
import { ChevronDownIcon, ChevronUpIcon } from "@gluestack-ui/themed";

const faqData = [
  {
    question: "Qu'est-ce que le don d'organes post mortem ?",
    answer:
      "Le don d'organes post mortem est le processus par lequel les organes et tissus d'une personne décédée sont prélevés pour être transplantés à des patients en attente de greffe. Ce geste peut sauver ou améliorer considérablement la vie de nombreuses personnes.",
  },
  {
    question: "Quels organes et tissus peuvent être donnés après la mort ?",
    answer:
      "Les organes les plus couramment donnés incluent le cœur, les poumons, les reins, le foie, le pancréas et l'intestin. Les tissus comme les cornées, la peau, les os, les tendons, les veines, les artères et les valves cardiaques peuvent également être donnés. Chacun de ces dons peut sauver des vies ou améliorer la qualité de vie des receveurs.",
  },
  {
    question: "Comment puis-je devenir donneur d'organes après ma mort ?",
    answer:
      "Vous pouvez exprimer votre souhait de devenir donneur d'organes en vous inscrivant sur le registre des donneurs de votre pays. Vous pouvez également en informer vos proches et indiquer votre volonté sur votre carte d'identité ou permis de conduire, selon les lois locales. Cette inscription garantit que vos souhaits seront respectés après votre décès.",
  },
  {
    question: "Le don d'organes affecte-t-il les funérailles ouvertes ?",
    answer:
      "Non, le don d'organes n'empêche pas les funérailles ouvertes. Les chirurgiens prélèvent les organes avec soin et le corps est reconstruit de manière à permettre les visites traditionnelles. Les soins post-don sont effectués pour garantir une présentation respectueuse et digne.",
  },
  {
    question: "Qui peut donner ses organes après la mort ?",
    answer:
      "En général, toute personne en bonne santé peut être un donneur d'organes. Cependant, la décision finale dépend de l'état des organes au moment du décès. Les critères de santé et d'âge peuvent varier, mais même les personnes âgées ou celles ayant des antécédents médicaux peuvent souvent donner certains organes ou tissus.",
  },
  {
    question: "Y a-t-il un coût pour la famille du donneur ?",
    answer:
      "Non, il n'y a aucun coût pour la famille du donneur. Tous les frais médicaux associés au prélèvement des organes sont pris en charge par le système de santé ou l'organisme de transplantation. Les familles ne sont pas responsables des frais liés au don d'organes.",
  },
  {
    question: "Comment les organes sont-ils attribués aux receveurs ?",
    answer:
      "Les organes sont attribués en fonction de divers facteurs, notamment la compatibilité sanguine et tissulaire, l'urgence médicale, le temps passé sur la liste d'attente et la distance entre le donneur et le receveur. Les systèmes de répartition sont conçus pour être justes et équitables, garantissant que les organes vont à ceux qui en ont le plus besoin et qui sont les mieux compatibles.",
  },
  {
    question: "Le don d'organes est-il compatible avec toutes les religions ?",
    answer:
      "La majorité des grandes religions soutiennent le don d'organes comme un acte de charité et de bienveillance. Il est recommandé de consulter un conseiller religieux pour des préoccupations spécifiques. Beaucoup de religions voient le don d'organes comme un acte de compassion et de générosité.",
  },
  {
    question:
      "Que se passe-t-il si je change d'avis après m'être inscrit comme donneur ?",
    answer:
      "Vous pouvez modifier ou retirer votre inscription à tout moment en contactant le registre des donneurs ou en mettant à jour vos préférences sur les documents appropriés. Informez également vos proches de tout changement dans votre décision.",
  },
  {
    question:
      "Les médecins feront-ils moins d'efforts pour sauver ma vie si je suis donneur ?",
    answer:
      "Non, les médecins chargés de votre traitement en situation d'urgence ne sont pas les mêmes que ceux impliqués dans les transplantations. Leur priorité est de sauver votre vie. Le processus de don d'organes n'est envisagé qu'après le constat de décès par des médecins indépendants des équipes de transplantation.",
  },
  {
    question:
      "Comment puis-je être sûr que mes organes seront utilisés de manière éthique ?",
    answer:
      "Le processus de don d'organes est strictement réglementé pour garantir que tous les dons sont effectués de manière éthique et que les organes sont utilisés pour sauver des vies. Les organismes de transplantation suivent des protocoles rigoureux pour assurer la transparence et l'équité.",
  },
  {
    question:
      "Que se passe-t-il si aucun de mes organes n'est compatible avec les receveurs en attente ?",
    answer:
      "Si vos organes ne sont pas compatibles avec les receveurs locaux, ils peuvent être proposés à d'autres centres de transplantation nationaux ou internationaux selon les accords en place. Les systèmes de partage d'organes maximisent l'utilisation de chaque don.",
  },
  {
    question: "Pourquoi devrais-je envisager de donner mes organes ?",
    answer:
      "Donner vos organes est un acte de générosité qui peut sauver ou améliorer la vie de nombreuses personnes. Chaque année, des milliers de personnes meurent en attente d'une greffe. En devenant donneur, vous pouvez faire une différence significative dans la vie de ces patients et de leurs familles.",
  },
  {
    question:
      "Quelles sont les conditions médicales qui pourraient m'empêcher de devenir donneur ?",
    answer:
      "Certaines conditions médicales comme le cancer actif ou certaines infections peuvent rendre un don d'organes impossible. Cependant, de nombreux autres problèmes de santé n'excluent pas nécessairement la possibilité de donner. Chaque cas est évalué individuellement par les professionnels de la santé.",
  },
  {
    question: "Le don d'organes post mortem est-il sécurisé ?",
    answer:
      "Oui, le don d'organes post mortem est sécurisé et effectué par des équipes médicales spécialisées qui suivent des protocoles stricts pour garantir la sécurité et l'éthique du processus. La confidentialité et la dignité du donneur sont toujours respectées.",
  },
  {
    question: "Comment puis-je en parler à ma famille ?",
    answer:
      "Il est important d'avoir une conversation ouverte et honnête avec votre famille sur votre décision de devenir donneur d'organes. Expliquez-leur pourquoi cela est important pour vous et assurez-vous qu'ils connaissent vos souhaits. Leur soutien est crucial pour que vos volontés soient respectées.",
  },
  {
    question: "Y a-t-il une limite d'âge pour devenir donneur d'organes ?",
    answer:
      "Il n'y a pas de limite d'âge pour devenir donneur d'organes. Les organes et tissus de personnes âgées peuvent être tout aussi précieux que ceux de jeunes donneurs. La décision de prélèvement est basée sur des critères médicaux plutôt que sur l'âge.",
  },
  {
    question: "Comment le don d'organes post mortem est-il coordonné ?",
    answer:
      "Le don d'organes est coordonné par des organisations spécialisées qui travaillent en étroite collaboration avec les hôpitaux. Une fois le décès constaté, les professionnels de la santé évaluent la faisabilité du don, obtiennent le consentement de la famille et organisent le prélèvement des organes.",
  },
  {
    question: "Puis-je spécifier quels organes ou tissus je souhaite donner ?",
    answer:
      "Oui, vous pouvez spécifier quels organes ou tissus vous souhaitez donner. Vous pouvez également indiquer si vous souhaitez exclure certains organes du don. Ces préférences peuvent être enregistrées dans le registre des donneurs ou communiquées à votre famille.",
  },
  {
    question: "Qu'advient-il du corps après le don d'organes ?",
    answer:
      "Après le prélèvement des organes, le corps est préparé pour les funérailles selon les souhaits de la famille. Les soins post-don garantissent que le corps est traité avec respect et dignité, permettant des funérailles traditionnelles ou autres cérémonies souhaitées.",
  },
];

export const FaqAccordion = () => {
  return (
    <Accordion
      width="100%"
      type="multiple"
      borderWidth={1}
      shadowColor="transparent"
      borderColor="$primaryLightActive"
    >
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          value={index.toString()}
          borderBottomWidth={1}
          sx={{
            borderBottomColor: "$primaryLightActive",
          }}
        >
          <AccordionHeader
            sx={{
              backgroundColor: "$white",
            }}
          >
            <AccordionTrigger>
              {({ isExpanded }) => (
                <>
                  <AccordionTitleText color="$primaryNormal">
                    {item.question}
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            mt="$0"
            pt="$2"
            sx={{
              backgroundColor: "$primaryLight",
            }}
          >
            <AccordionContentText>{item.answer}</AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

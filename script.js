window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".reveal-fade, .reveal-slide, .reveal-text")
    .forEach((el, idx) => {
      setTimeout(() => el.classList.add("is-visible"), idx * 200);
    });
});

const translations = {
  en: {
    nav_Accueil: "Home",
    nav_Àpropos: "About Me",
    nav_Compétences: "Skills",
    nav_Études: "Case Studies",
    nav_contact: "Contact",
    name: "Hello, I am Marouane Ouchen",
    btn: "Skills",
    pr_name:
      "A young versatile player evolving as DMF, AMF, and RB at KACM – Kawkab de Marrakech, passionate about football and determined to progress every day.",
    title_Àpropos: "About Me",
    pr_title:
      "My name is Marouane Ouchen, I am 17 years old, and I am a young football player currently playing at KACM (Kawkab de Marrakech). I play mainly as a Defensive Midfielder (DMF), Attacking Midfielder (AMF), and Right Back (RB), positions that require versatility, strong tactical understanding, and constant commitment. Football has always been more than a sport for me; it is my goal, passion, and driver for personal development. Thanks to daily training, I have developed excellent game reading, ball recovery skills, and offensive vision to create dangerous opportunities for my team. I value discipline, patience, and self-improvement. Whatever my position (DMF, AMF, RB), I always bring high energy, game intelligence, and adaptability. My ambition is to continue developing and reach a higher level by joining more competitive environments to exploit my full potential. I am open to new opportunities, training, or collaborations that contribute to my growth as a player.",
    title_Compétences: "Skills & Talents",
    pr_title_Compétences: "The skills that distinguish me on the field",
    title_dmf: "Defensive Midfielder (DMF)",
    pr_dmf:
      "I stand out by my ability to read the game and anticipate opponents' movements, allowing me to recover the ball efficiently and protect the defense. My tactical vision, concentration, and positioning allow me to intercept passes and cut opponent lines while being a reliable pivot for teammates.",
    title_amf: "Attacking Midfielder (AMF)",
    pr_amf:
      "In a more attacking role, I can create chances and generate threats in the opponent's half. I excel in decisive passes, coordination with teammates, and controlling the pace of the game. My timing and creativity allow me to find spaces and contribute effectively to scoring opportunities.",
    title_rb: "Right Back (RB)",
    pr_rb:
      "As a right side defender, I combine defensive strength with offensive support. I participate in ball recovery while providing solutions on the wing to support attackers. My versatility and adaptability to tactical plans make me a reliable player across the field.",
    title_case: "Case Studies",
    pr_title_case: "Player performance and development",
    title_case1: "Speed Improvement",
    title_case2: "Passing Accuracy & Game Vision",
    title_case3: "Physical Strength & Duels",
    pr_case1:
      "In recent months, the player followed an intensive sprint and plyometric program aimed at increasing speed and explosiveness. Sessions included acceleration exercises, short interval sprints, and technical drills to improve coordination and reaction. Thanks to this program, the player reduced acceleration time over 10 meters, improved top speed, and became more decisive in counter-attacks.",
    pr_case2:
      "This program focused on improving passing accuracy and decision-making under pressure. Specific exercises in small spaces, combined with realistic game situations, enhanced the player's ability to quickly analyze the field and choose the best options. The player increased successful passes, reduced lost balls, and improved key passes that create goal-scoring opportunities.",
    pr_case3:
      "To dominate duels and increase power on the field, the player followed a functional strengthening program targeting lower body, core, and upper body. Sessions included strength, stability, and general fitness exercises adapted for football.Thanks to this program, the player increased contact power, improved ball protection and recovery in duels, becoming a key element in defensive and offensive phases.",
    contact_title: "Contact Me",
    contact_p:
      'As a passionate and determined football player, I am always open to new opportunities, collaborations, or simple discussions about football. If you want to discuss a partnership, friendly match, training session, or any football-related project, feel free to contact me. You can email me at <a href=\'mailto:yosfouchchen@gmail.com\'><img src="images/google-gmail-svgrepo-com.svg" alt="logo-email" loading="lazy" /></a> and I will respond as soon as possible. For more direct communication, you can also call me at <a href="https://wa.me/212661476495" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg></a>. Every message is valuable to me, and I always respond with attention and enthusiasm. Whether it\'s sharing ideas, planning training, or discussing a sports project, I am available and motivated to establish meaningful contact.',
  },
  ar: {
    nav_Accueil: "الرئيسية",
    nav_Àpropos: "نبذة عني",
    nav_Compétences: "مهاراتي",
    nav_Études: "دراسات الحالة",
    nav_contact: "اتصل بي",
    name: "مرحبا أنا مروان أوشن",
    pr_name:
      " لاعب شاب متعدد المهارات أُشارك في مراكز محور الارتكاز الدفاعي، محور الارتكاز الهجومي ، والظهير الأيمن  في نادي الكوكب المراكشي ، شغوف بكرة القدم ومصمم على التطور كل يوم.",
    btn: "المهارات",
    title_Àpropos: "نبذة عني",
    pr_title:
      "اسمي مروان أوشن، أبلغ من العمر 17 سنة، وأنا لاعب كرة قدم شاب أمارس حاليًا مع نادي KACM (كوكب مراكش). ألعب بشكل أساسي كوسط دفاعي (DMF)، وسط هجومي (AMF) والظهير الأيمن (RB)، وهي مراكز تتطلب قدرًا كبيرًا من التعددية، وفهمًا تكتيكيًا قويًا، والتزامًا دائمًا. منذ بداياتي، شكلت كرة القدم أكثر من مجرد رياضة بالنسبة لي؛ فهي هدفي، شغفي، ومحرك تطوري الشخصي. بفضل عملي اليومي، طورت قدرة ممتازة على قراءة المباراة، ومهارة جيدة في استعادة الكرة، ورؤية هجومية تساعدني على خلق فرص خطيرة لفريقي خلال مسيرتي مع KACM، تعلمت أهمية الانضباط، الصبر، وتجاوز الذات. سواء تموضعني كـ DMF، AMF أو RB، أقدم دائمًا مستوى عالي من الطاقة، ذكاء في اللعب، وقدرة كبيرة على التكيف حسب احتياجات الفريق. طموحي هو الاستمرار في التطور والوصول إلى مستوى أعلى في مسيرتي، من خلال الانضمام إلى بيئات أكثر تنافسية تتيح لي استغلال كامل إمكانياتي. أنا منفتح على فرص جديدة، تدريب، أو تعاون يساهم في تطوري كلاعب.",
    title_Compétences: "المهارات & مواهبي",
    pr_title_Compétences: "المهارات التي تميزني على أرض الملعب",
    title_dmf: "وسط دفاعي (DMF)",
    pr_dmf:
      "تميز بقدرتي على قراءة المباراة وتوقع تحركات الخصم، مما يمكنني من استعادة الكرة بكفاءة وحماية خط دفاعي. رؤيتي التكتيكية وتركيزي وحس المكان يجعلوني قادرًا على اعتراض التمريرات وقطع خطوط اللعب للخصم، مع البقاء نقطة ارتكاز موثوقة لزملائي في الفريق.",
    title_amf: "وسط هجومي (AMF)",
    pr_amf:
      "في دور هجومي أكثر، أستطيع خلق الفرص وإحداث تهديد في منطقة الخصم. أتقن التمريرات الحاسمة، التنسيق مع زملائي، والتحكم في إيقاع المباراة. إحساسي بالتوقيت وإبداعي يسمحان لي بإيجاد المساحات والمساهمة بشكل فعال في فرص تسجيل الأهداف.",
    title_rb: "ظهير أيمن (RB)",
    pr_rb:
      "كمدافع جانبي أيمن، أجمع بين القوة الدفاعية والدعم الهجومي. أشارك في استعادة الكرة مع تقديم حلول على الجناح لدعم المهاجمين. تعددي وقدرتي على التكيف مع الخطط التكتيكية المختلفة تجعلني لاعبًا موثوقًا على كامل عرض الملعب.",
    title_case: "دراسات حالة",
    pr_title_case: '"ادء وتطور اللاعب."',
    title_case1: "تحسين السرعة",
    title_case2: "دقة التمريرات ورؤية اللعب",
    title_case3: "القوة البدنية والمواجهات المباشرة",
    pr_case1:
      "خلال الأشهر الأخيرة، خضع اللاعب لبرنامج مكثّف في تمارين السرعة والبلایومتري بهدف رفع سرعته وزيادة قوته الانفجارية داخل الملعب. شملت الحصص تمارين التسارع، والسباقات القصيرة المتقطعة، إضافة إلى تدريبات تقنية تعمل على تحسين التنسيق وردّة الفعل. وبفضل هذا البرنامج، تمكن اللاعب من تقليص زمن التسارع في مسافة 10 أمتار، ورفع سرعته القصوى، وأصبح أكثر حسماً أثناء الهجمات المرتدة، مما منح فريقه أفضلية كبيرة في المباريات.",
    pr_case2:
      "تركّز هذا البرنامج على تحسين دقة التمريرات والقدرة على اتخاذ القرار بسرعة تحت الضغط. وقد ساعدت التمارين الخاصة في المساحات الضيقة، الممزوجة بمواقف لعب واقعية، على تعزيز قدرة اللاعب في تحليل الملعب بسرعة واختيار أفضل الخيارات.نجح اللاعب في رفع نسبة التمريرات الناجحة، وتقليل عدد الكرات المفقودة، وتحسين عدد التمريرات الحاسمة التي تخلق فرصاً للتسجيل لصالح فريقه",
    pr_case3:
      "لتسيد المواجهات المباشرة وزيادة القوة على أرض الملعب، اتبع اللاعب برنامجًا لتقوية الجسم مستهدفًا الجزء السفلي من الجسم والجذع والجزء العلوي. شملت الجلسات تمارين قوة، وتوازن، ولياقة عامة، مُصممة خصيصًا لكرة القدم. وبفضل هذا البرنامج، زاد اللاعب من قوته أثناء الاحتكاكات، وحسّن قدرته على حماية الكرة واستعادتها في مواقف المواجهة، ليصبح بذلك عنصرًا أساسيًا في المراحل الدفاعية والهجومية لفريقه.",
    contact_title: "تواصلوا معي",
    contact_p: `
بصفتي لاعب كرة قدم شغوفًا ومصممًا على التطور، فأنا دائمًا منفتح على الفرص الجديدة
والتعاونات المختلفة أو حتى النقاشات البسيطة حول كرة القدم. إذا كنت ترغب في مناقشة
شراكة، أو خوض مباراة ودية، أو تنظيم حصة تدريبية، أو أي مشروع آخر متعلق بعالم كرة
القدم، فلا تتردد في التواصل معي. يمكنك مراسلتي عبر البريد الإلكتروني على
<a href="mailto:yosfouchchen@gmail.com"><img src="images/google-gmail-svgrepo-com.svg" alt="logo-email" loading="lazy" /></a> وسأقوم بالرد عليك في أسرع وقت ممكن.
وللتواصل بشكل أكثر مباشرة، يمكن الاتصال بي عبر الهاتف على
<a href="https://wa.me/212661476495" target="_blank" "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
              />
            </svg></a>.
كل رسالة تصلني لها قيمة كبيرة، وألتزم دائمًا بالرد باهتمام وحماس. سواء كان
الأمر يتعلق بتبادل الأفكار، أو تخطيط تدريب، أو مناقشة مشروع رياضي، فأنا متاح
ومتحمس لبناء تواصل مثمر.
,`,
  },
  fr: {
    nav_Accueil: "Accueil",
    nav_Àpropos: "À propos de moi",
    nav_Compétences: "Compétences",
    nav_Études: "Études de cas",
    nav_contact: "Contact",
    name: "Bounjour, Je suis Marouane Ouchen",
    btn: "Compétences",
    pr_name:
      "   Jeune joueur polyvalent évoluant en DMF, AMF et RB au KACM – Kawkab de Marrakech, passionné de football et déterminé à progresser chaque jour",

    title_Àpropos: "À propos de moi",
    pr_title:
      "Je m’appelle Marouane Ouchen, j’ai 17 ans, et je suis un jeune joueur de football évoluant actuellement au KACM (Kawkab de Marrakech). Je joue principalement en tant que milieu défensif (DMF), milieu offensif (AMF) et arrière droit (RB), des postes qui demandent une grande polyvalence, une compréhension tactique solide et un engagement constant. Depuis mes débuts, le football représente bien plus qu’un sport : c’est mon objectif, ma passion et le moteur de mon développement personnel. Grâce à mon travail quotidien, j’ai développé une excellente lecture du jeu, une bonne capacité à récupérer le ballon, ainsi qu’une vision offensive qui me permet de créer des occasions dangereuses pour mon équipe. À travers mon parcours au KACM, j’ai appris l’importance de la discipline, de la patience et du dépassement de soi. Que je sois positionné en DMF, AMF ou RB, j’apporte intensité, intelligence de jeu, et une grande adaptabilité selon les besoins de l’équipe. Mon ambition est de continuer à progresser et à atteindre un niveau supérieur dans ma carrière, en rejoignant des environnements plus compétitifs qui me permettront d’exploiter tout mon potentiel. Je suis ouvert à de nouvelles opportunités, stages et collaborations qui contribueront à mon évolution en tant que joueur.",
    title_Compétences: "Compétences & Mes talents",
    pr_title_Compétences: "Les compétences qui me distinguent sur le terrain",
    title_dmf: "Milieu défensif (DMF)",
    pr_dmf:
      "Je me distingue par ma capacité à lire le jeu et anticiper les mouvements adverses, ce qui me permet de récupérer le ballon efficacement et de protéger ma défense. Ma vision tactique, ma concentration et mon sens du placement me permettent d’intercepter les passes et de couper les lignes de jeu adverses, tout en restant un point de relais fiable pour mes coéquipiers.",
    title_amf: "Milieu offensif (AMF)",
    pr_amf:
      "Dans un rôle plus offensif, je suis capable de créer des occasions et de générer du danger dans le camp adverse. J’excelle dans les passes décisives, la coordination avec mes coéquipiers et la gestion du rythme du jeu. Mon sens du timing et ma créativité me permettent de trouver des espaces et de contribuer activement aux actions de but.",
    title_rb: "Arrière droit (RB)",
    pr_rb:
      "En tant que défenseur latéral droit, j’allie solidité défensive et soutien offensif. Je participe à la récupération de balle tout en apportant des solutions sur l’aile pour soutenir les attaquants. Ma polyvalence et ma capacité à m’adapter à différents schémas tactiques font de moi un joueur fiable sur toute la largeur du terrain.",
    title_case: "Études de cas",
    pr_title_case: '"Performance et progression du joueur."',

    title_case1: "Amélioration de la vitess",
    title_case2: "Précision des passes et vision du jeu",
    title_case3: "Force physique et duels",
    pr_case1:
      "Au cours des derniers mois, le joueur a suivi un programme intensif de sprint et de pliométrie visant à augmenter sa vitesse et son explosivité sur le terrain. Les séances comprenaient des exercices d’accélération, des sprints fractionnés et des drills techniques pour améliorer la coordination et la réactivité. Grâce à ce programme, le joueur a pu réduire son temps d’accélération sur 10 mètres, améliorer sa vitesse maximale et être plus décisif lors des contre-attaques, offrant ainsi un avantage considérable à son équipe.",
    pr_case2:
      "Ce programme s’est concentré sur l’amélioration de la précision des passes et la prise de décision rapide sous pression. Des exercices spécifiques en petits espaces, combinés à des situations de jeu réalistes, ont permis de renforcer la capacité du joueur à analyser rapidement le terrain et à choisir la meilleure option. Le joueur a augmenté le pourcentage de passes réussies, réduit les pertes de balle et amélioré le nombre de passes clés créant des occasions de but pour son équipe.",
    pr_case3:
      "Pour dominer les duels et gagner en puissance sur le terrain, le joueur a suivi un programme de renforcement fonctionnel ciblant le bas du corps, le tronc et le haut du corps. Les séances incluaient des exercices de force, de stabilité et de condition physique générale, adaptés au football. Grâce à ce programme, le joueur a augmenté sa puissance dans les contacts, amélioré sa capacité à protéger le ballon et à récupérer des ballons dans les situations de duel, devenant ainsi un élément clé dans les phases défensives et offensives de son équipe.",
    contact_title: "Contactez-moi",
    contact_p: `
          En tant que joueur de football passionné et déterminé, je suis
          toujours ouvert à de nouvelles opportunités, collaborations ou
          simplement pour échanger autour du sport. Si vous souhaitez discuter
          d’un partenariat, d’un match amical, d’une session d’entraînement ou
          de tout projet lié au football, n’hésitez pas à me contacter. Vous
          pouvez m’envoyer un email à
          <a href="mailto:yosfouchchen@gmail.com"><img src="images/google-gmail-svgrepo-com.svg" alt="logo-email" loading="lazy" /></a>, et je vous
          répondrai dès que possible. Pour une communication plus directe, je
          suis également joignable par téléphone au
          <a href="https://wa.me/212661476495" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
              />
            </svg></a>. Chaque message est
          important pour moi, et je m’engage à répondre avec attention et
          enthousiasme. Que ce soit pour échanger des idées, planifier un
          entraînement ou discuter d’un projet sportif, je suis disponible et
          motivé pour établir un contact enrichissant.
      `,
  },
};
const languageSlectop = document.getElementById("langSelect");
let contact_title = document.getElementById("contact_titel");
let contact_p = document.getElementById("contact_p");
let title_case1 = document.getElementById("title_case1");
let title_case2 = document.getElementById("title_case2");
let title_case3 = document.getElementById("title_case3");
let pr_case1 = document.getElementById("pr_case1");
let pr_case2 = document.getElementById("pr_case2");
let pr_case3 = document.getElementById("pr_case3");
let title_case = document.getElementById("title_case");
let pr_title_case = document.getElementById("pr_title_case");
let pr_title_Compétences = document.getElementById("pr_title_Compétences");
let title_dmf = document.getElementById("title_dmf");
let title_amf = document.getElementById("title_amf");
let title_rb = document.getElementById("title_rb");
let pr_dmf = document.getElementById("pr_dmf");
let pr_amf = document.getElementById("pr_amf");
let pr_rb = document.getElementById("pr_rb");
let title_Compétences = document.getElementById(" title_Compétences");
let pr_title = document.getElementById("pr_title");
let title_Àpropos = document.getElementById("titel-Àpropos");
let pr_name = document.getElementById("pr-name");
let name = document.getElementById("name");
let nav1 = document.getElementById("nav_Accueil");
let nav2 = document.getElementById("nav_Àpropos");
let nav3 = document.getElementById("nav_Compétences");
let nav4 = document.getElementById("nav_Études");
let nav5 = document.getElementById("nav_contact");
let btn = document.getElementById("btn");
languageSlectop.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("sitLang", event.target.value);
});
const setIfExists = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
};
const setLanguage = (language) => {
  const data = translations[language] || translations.ar;
  setIfExists("contact_title", data.contact_title);
  setIfExists("contact_p", data.contact_p);
  setIfExists("title_case1", data.title_case1);
  setIfExists("title_case2", data.title_case2);
  setIfExists("title_case3", data.title_case3);
  setIfExists("pr_case1", data.pr_case1);
  setIfExists("pr_case2", data.pr_case2);
  setIfExists("pr_case3", data.pr_case3);
  setIfExists("title_case", data.title_case);
  setIfExists(" pr_title_case", data.pr_title_case);
  setIfExists("pr_title_Compétences", data.pr_title_Compétences);
  setIfExists("title_dmf", data.title_dmf);
  setIfExists("title_amf", data.title_amf);
  setIfExists("title_rb", data.title_rb);
  setIfExists("pr_dmf", data.pr_dmf);
  setIfExists("pr_amf", data.pr_amf);
  setIfExists("pr_rb", data.pr_rb);
  setIfExists("title_Compétences", data.title_Compétences);
  setIfExists("pr_title", data.pr_title);
  setIfExists("titel-Àpropos", data.title_Àpropos);
  setIfExists("nav_Accueil", data.nav_Accueil);
  setIfExists("nav_Àpropos", data.nav_Àpropos);
  setIfExists("nav_Compétences", data.nav_Compétences);
  setIfExists("nav_Études", data.nav_Études);
  setIfExists("nav_contact", data.nav_contact);
  setIfExists("name", data.name);
  setIfExists("pr-name", data.pr_name);
  setIfExists("btn", data.btn);
  try {
    if (language === "ar") {
      document.body.classList.add("arabic");
    } else if (language === "fr") {
      document.body.classList.remove("arabic");
    } else if (language === "en") {
      document.body.classList.remove("arabic");
    }
  } catch (e) {
    console.warn("Translation skipped:", e);
  }
};
window.onload = () => {
  const savedLang = localStorage.getItem("sitLang") || "fr";
  setLanguage(savedLang);
  languageSlectop.value = savedLang;
};

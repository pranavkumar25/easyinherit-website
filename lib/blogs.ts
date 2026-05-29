/**
 * Blog content extracted from the EasyInherit editorial archive.
 * Each blog: slug · title · excerpt · category · date · readTime · body.
 *
 * Body is stored as an array of blocks — heading, paragraph, list —
 * so the renderer can apply typography styles per block type.
 */

export type BlogCategory =
  | "Wills & Estate"
  | "NRI & Succession"
  | "Rights & Law"
  | "Family Planning"
  | "Digital Assets";

export interface BlogBlock {
  type: "heading" | "paragraph" | "list";
  text?: string;
  items?: string[];
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO YYYY-MM
  readTime: string;
  body: BlogBlock[];
}

const p = (text: string): BlogBlock => ({ type: "paragraph", text });
const h = (text: string): BlogBlock => ({ type: "heading", text });
const l = (items: string[]): BlogBlock => ({ type: "list", items });

export const BLOGS: Blog[] = [
  {
    slug: "executing-a-will-6-steps",
    title: "Executing a will: 6 steps to do it carefully & fairly",
    excerpt:
      "If you're named executor, you hold the key to someone's deepest intentions. A practical 6-step guide to fulfilling that duty with care.",
    category: "Wills & Estate",
    date: "2022-04",
    readTime: "6 min",
    body: [
      p(
        "When you are named executor of a will, you hold the key to their clearest and deepest intentions. If designated as someone's will executor, you likely were close to this person and earned their trust. The closer you are to someone, the harder it may be for you to make peace with their demise. It is also likely that your bond may influence the strength of your opinion about the contents of their will."
      ),
      p(
        "However, it is essential to remember your role — that of someone trusted with the care it takes to fulfil someone's final wishes. You owe an ethical and legal duty of care to the person who made the will and those named in the will."
      ),
      h("1. Locating & communicating the will to beneficiaries"),
      p(
        "Having the physical will in your possession is key to executing it. The simple act of writing a will with two witness signatures makes it a legally admissible document for probate. As the executor, you should know where it is stored and have access to it. On possessing the will, the next step is to call a meeting of the beneficiaries and communicate its contents to them."
      ),
      h("2. Probate of will"),
      p(
        "A will must go into probate, or legal verification, unless it has been previously registered. Typically, the cost of probate is capped at ₹75,000 although it hinges on a percentage of the total value of assets. The probate process ordinarily occurs at the relevant court, often at the High Court with the court seal and a copy of the will in case of high-value immovable assets."
      ),
      h("3. Settle bills, debts, liabilities, and taxes"),
      p(
        "Someone with a sizable portion of cash and assets is likely responsible for payment of a variety of expenses — utilities, insurance premiums, credit card bills, and other purchases. They may owe their bank money or have due bills at frequented institutions or shops. They are likely to owe taxes at the end of each financial year, and may even owe small loans or have business dues. It is essential that a list of these is made for easy tracking down."
      ),
      h("4. Claim dues owed"),
      p(
        "Similar to debts, the deceased may be owed money. This can be in the form of an insurance policy, interest on any loans given, or other recurring transactions that pay them. A bank statement may indicate this if not found in the personal balance sheet of the deceased."
      ),
      h("5. Begin transfer of cash, jewellery, & intangible assets"),
      p(
        "Bank assets, typically savings accounts, fixed deposits, or any other assets bought with the bank as an intermediary, are transferred more easily with a nominee and a will. In the absence of a will, a nominee can request that assets be transferred to them for caretaking or as inheritance. Jewellery is simpler to transfer if itemised and laid out clearly in the will. Other intangible assets, like mutual funds or stock investments, follow a similar pattern to the bank accounts."
      ),
      h("6. Follow all the instructions in the will"),
      p(
        "It is natural to have your own take on the distribution of assets left behind in a will. However, being an executor is more about being judicious than any other quality. It is about being empathetic towards the humanity of the deceased and the people they left behind. To execute a will fully and fairly, it is essential to follow all the instructions in the will through every detail. As an executor, this is the only test for the quality of your role."
      ),
    ],
  },
  {
    slug: "living-will-medical-care",
    title: "A living will: the legal doc for your medical care",
    excerpt:
      "Decide how to be treated medically through a living will — and ensure your dignity is preserved during your final moments.",
    category: "Wills & Estate",
    date: "2022-04",
    readTime: "5 min",
    body: [
      p(
        "Human dignity is a fundamental value that forms the roots of mutual respect and empowers us to lead a worthy life. The conversations around dignity increase as generations progress, making it a factor in our decisions. While it is a common decision to prepare a will for when we leave our loved ones behind, we should also consider the state in which we say our goodbyes. It is important to consider making a living will to keep our dignity intact."
      ),
      h("What is a living will?"),
      p(
        "A living will is a legal document in which a person specifies the medical actions that should be taken for their health if they are no longer able to make decisions for themselves due to illness or incapacity. It is sometimes referred to as an advance directive."
      ),
      h("Why it matters in India"),
      p(
        "In 2018, the Supreme Court of India recognised passive euthanasia and the right to make a living will, allowing terminally ill patients to refuse life-prolonging medical treatment. This was a landmark moment for personal dignity in end-of-life care."
      ),
      h("How to prepare one"),
      p(
        "A living will should clearly state your preferences regarding medical treatment, including whether you wish to be kept alive on life support, your preferences for palliative care, and your preferred medical proxy who can make decisions on your behalf. The document must be signed in the presence of two witnesses and may need to be notarised depending on jurisdiction."
      ),
      p(
        "If you are considering making your own living will, you can receive expert guidance from EasyInherit, a one-stop succession solution for all claims, inheritance, and will matters."
      ),
    ],
  },
  {
    slug: "same-sex-partnerships-inheritance",
    title: "Same-sex partnerships: a will is the only way to ensure inheritance",
    excerpt:
      "Until same-sex marriages are legally recognised in India, a will is the only way to ensure your partner inherits your assets.",
    category: "Rights & Law",
    date: "2022-04",
    readTime: "5 min",
    body: [
      p(
        "In October 2022, the Life Insurance Corporation (LIC) of India confirmed that there was no bar on policyholders naming their same-sex partners as nominees. The confirmation was made in reply to an RTI query filed by Suchandra Das and Sree Mukherjee, a Kolkata-based queer couple."
      ),
      p(
        "After the Supreme Court decriminalised same-sex relationships in 2018, the LIC's reply looked like yet another major step in the right direction. But the truth is, we still have a long way to go before same-sex relationships are accorded the same status of a heterosexual marriage."
      ),
      h("Nominee vs Successor"),
      p(
        "While the LIC has given its nod to making same-sex partners nominees, the catch is, a nominee doesn't mean a successor. In legal parlance, a nominee is just like a caretaker — someone who is entrusted with the policy amount in the absence of the policyholder till his/her legal successor steps in. Once the latter enters the scene, the 'nominee' will have to hand over the money and has no rights over it."
      ),
      p(
        "It's not just insurance policies; since same-sex marriages enjoy no legal validity in India, lesbian/gay couples are not recognised as spouses, and this leaves them with no inheritance rights. So, is there a way to ensure that your same-sex partner becomes your legal successor? Yes, you can write a will, bequeathing your legacy to them."
      ),
      h("Same-sex marriages and Special Marriage Act"),
      p(
        "In India, marriages are governed by an individual's religion — Hindu Marriage Act 1955, Muslim Marriages Act 1939, etc. There's also a Special Marriage Act (SMA), which is what inter-faith marriages are registered under. Because of its secular nature, most same-sex marriage supporters feel that SMA is ideal for initiating the change."
      ),
      h("Include same-sex partners in your will"),
      p(
        "Until such relationships are legally approved, the only way to ensure that your partner inherits your assets is by including them in your will. If you have any queries, contact EasyInherit, India's first full-service digital inheritance specialist."
      ),
    ],
  },
  {
    slug: "interfaith-marriages-inheritance",
    title: "Inter-faith marriages and inheritance: the legal hurdles",
    excerpt:
      "Inter-faith marriages bring distinct inheritance challenges in India. A will is often the only answer.",
    category: "Rights & Law",
    date: "2022-05",
    readTime: "5 min",
    body: [
      p(
        "Though inter-faith marriages are becoming increasingly common and not as frowned upon as they used to be, they are yet to find total acceptance in Indian society. A major concern is the inheritance rights of couples who belong to different religions."
      ),
      h("Inter-faith marriages & law"),
      p(
        "In India, 'marriage' falls under the ambit of personal law, which depends on a person's religion. For example, the Hindu Marriage Act, 1955, allows marital union between Hindus, Jains, Sikhs and Buddhists. The Indian Christian Marriage Act, 1972, also permits inter-faith unions, provided that one of the partners is a Christian. Islamic law deems that inter-faith marriages between a Muslim and a person from another faith can be regularised with conversion."
      ),
      p(
        "The Special Marriage Act, 1954, allows people from different religions to marry each other without conversion, but it comes with a different set of hurdles. It's mandatory to give a 30-day notice period for such marriages, and three witnesses are required (as opposed to two in other marriages)."
      ),
      h("Inheritance in inter-faith marriages"),
      p(
        "As per Hindu laws, if any Hindu, Jain, Sikh or Buddhist marries outside his/her religion and converts, he/she loses the right to inherit ancestral property. If a Hindu marries as per the Special Marriage Act, too, he/she loses his status as a coparcener — someone with equal inheritance rights in an undivided property."
      ),
      p(
        "In the case of intestate deaths, unless the couple and their children convert back to Hinduism before the demise of the testator, they will not be able to claim inheritance. While the children born out of such marriages have a right to inherit their father's property, they will be deprived of their ancestral inheritance."
      ),
      h("A will is the only answer"),
      p(
        "So, what is the way out if you want your loved ones who have married outside their religion to receive their rightful share of the ancestral property? There is only one answer — make a will and bequeath to them what is theirs."
      ),
    ],
  },
  {
    slug: "money-matters-family-talk",
    title: "Money matters: don't delay the 'talk' with your family",
    excerpt:
      "Only 2-3% of Indians make a will during their lifetime. Why we delay the inheritance talk — and why we shouldn't.",
    category: "Family Planning",
    date: "2022-05",
    readTime: "6 min",
    body: [
      p(
        "Soon after his retirement, Prasun Sharma had distributed all his savings into multiple investment instruments. From FDs and insurances to post office schemes and stocks, his portfolio was well-balanced, with his sons and wife as nominees. However, assuming death was years away, he neither consolidated everything nor wrote a will. After a sudden brain haemorrhage, Prasun passed away. The sons, both of whom lived outstation, discovered it was a riddle that would take years to solve."
      ),
      h("Indian households and trust issues"),
      p(
        "How many of us are familiar with this situation? If reports are to be believed, only 2-3% of Indians make a will during their lifetime. An even lesser number of people create a portfolio to consolidate everything. Most others believe death can be delayed forever. Why this apathy? You prefer to delay it for any of the following reasons: patriarchy, trust issues, living in denial, and the like."
      ),
      p(
        "Despite evolving with time, most Indian households are still steeped in patriarchy, knowingly or unknowingly. Even if some families boast of treating female members with equal respect, when it comes to property and financial decisions, many feel it is the man's domain."
      ),
      p(
        "There can also be a possibility where you steer away from talking about properties with family for fear of being cheated. Well, such instances are not uncommon, but it doesn't mean you need to hide things from your families."
      ),
      h("Why the talk matters"),
      p(
        "Living in denial that death is inevitable and can come in any form at any time is common. There's no better example than the pandemic when thousands of people lost their lives much ahead of time. The 'talk' is necessary if you want to save your family from never-ending trips to courts, municipalities, banks, lawyers, and brokers."
      ),
      p(
        "You can start by creating a profile on EasyInherit and get a portfolio with information about your assets. Involve your family in the process and take a positive step to secure their future."
      ),
    ],
  },
  {
    slug: "nri-inheritance-aging-parents",
    title: "NRIs and the curious case of inheritance",
    excerpt:
      "An NRI returns home to face his mother's passing — and discovers he has just seven days to untangle her inheritance.",
    category: "NRI & Succession",
    date: "2022-05",
    readTime: "6 min",
    body: [
      p(
        "Gautam, an IT professional in California with a flourishing career, had only one qualm in life — his septuagenarian mother never agreed to move countries. She was not comfortable leaving her house and staying away from relatives and friends. But her body was slowly giving up, and eventually, she passed away, leaving behind her beloved house and a lot more. Gautam had to fly for more than 24 hours to see his mother for one last time."
      ),
      h("Day-by-day reality"),
      p(
        "Day 1: As soon as he lands, Gautam has to rush for the last rites, and after one of the longest days of his life, he just wants to crash in. But there are relatives in the house, and they want to know what caused his mother's death."
      ),
      p(
        "Day 2: Gautam thinks about his mother, childhood, and the house. He has to arrange for rituals. Meanwhile, someone asks what his plans are for the house, and it strikes him he needs to figure that out too."
      ),
      p(
        "Day 3: Gautam explores his mother's drawers looking for property papers and bank details. He calls the bank to inform them about her demise and asks for the next steps, nominees, etc."
      ),
      p(
        "Day 5: Trip to the bank, a lawyer, and the local municipality to figure out the succession procedure. Gautam, who is too used to smart solutions in the US, realises he will need to become Gautam Buddha to deal with the Indian system."
      ),
      p(
        "Day 7: Gautam wonders if his suitcase would be enough to pack in all the memories he has had in this house. He had no reason to come back to India anymore. But what about this house and whatever little asset his parents had acquired over the years?"
      ),
      h("Plan ahead"),
      p(
        "Gautam's story is the reality in many Indian households. If you are an NRI who has aged parents in India, you need to talk to them about their assets. They can choose to give away their properties or savings to you or anyone else, but they must let you know about it all or have a portfolio that helps you do the needful in their absence."
      ),
    ],
  },
  {
    slug: "5-conversation-starters-aging-parents",
    title: "5 quick inheritance conversation starters with your ageing parents",
    excerpt:
      "Talking about inheritance with parents isn't easy. Five gentle ways to start the conversation.",
    category: "Family Planning",
    date: "2022-06",
    readTime: "5 min",
    body: [
      p(
        "Have you ever tried talking about money with your parents? It is likely that the conversation has mostly been one-way traffic, where you were told to save, invest, and not splurge. But what about the other way round? Have you ever tried asking your parents how much savings they have, who their nominees are, or do they have any succession plans?"
      ),
      p(
        "Now, talking about inheritance with your parents isn't as easy as it sounds. So how should you go about it? Read on to know five inheritance conversation starters you can try:"
      ),
      h("1. Talk about recent news"),
      p(
        "There is no dearth of inheritance, property, or finance-related news in India. Start talking to your parents with one such interesting news and eventually get them talking about how they plan to utilise their savings. Do they want to diversify, who are their nominees, and how can you contribute to their plans?"
      ),
      h("2. Talk about your finances"),
      p(
        "People in their mid-to-late-30s or early 40s are mostly financially sound with stable careers. You can start talking to your parents by asking for suggestions or discussing your portfolio. Once they feel comfortable, ask them what they have done with their savings."
      ),
      h("3. Talk about 'what if' situations"),
      p(
        "What if they need money for an emergency? What if one of them falls ill suddenly? There can be so many unforeseen 'what ifs' in our lives, and one must be prepared. Ask them about their contingency plans and who is aware of them — a friend, a lawyer, or is it a financial advisor? Do they have a will or plan to write one?"
      ),
      h("4. Give references of relatives or friends"),
      p(
        "In case you know of a relative or friend who has already planned their succession by writing a will, point them out while starting the conversation. Tell your parents what a wonderful thing these people have done. An example is always the best way to convey a message."
      ),
      h("5. Lead them to helpful platforms"),
      p(
        "Not many parents in their 60s or 70s are tech-savvy or aware of platforms where one can easily write a will. Advanced concepts like the Government of India's DigiLocker are also alien to most. Introduce your parents to such platforms and tell them how helpful these are."
      ),
    ],
  },
  {
    slug: "estate-planning-women",
    title: "Estate planning and women: it is time to know all that matters",
    excerpt:
      "59% of Indian women don't make independent financial decisions. Estate planning awareness for women is no longer optional.",
    category: "Family Planning",
    date: "2022-06",
    readTime: "5 min",
    body: [
      p(
        "Manisha, in her early 40s, has a teenage daughter. During a conversation about money, her daughter asked, 'How much money do you and dad have, mama?' It got Manisha thinking. She runs the house efficiently, but she has no idea of her own finances nor her husband's savings or assets, who were his nominees, or what plans he had for the future."
      ),
      p(
        "This is probably the case with so many women across the country. They may be heading big institutions, running successful businesses, or shaping young minds. But when it comes to knowledge of their husbands' assets and managing finances, they have miles to go."
      ),
      h("Equality and necessity"),
      p(
        "Thorough knowledge of your or your spouse's properties and assets is a basic thing that every woman should know. While it is about equality, it is much more about necessity. With changing times and women's empowerment at its peak, taking responsibility for their own finances is the basic that all women should start doing."
      ),
      p(
        "What if there is a situation when she has to make decisions, but is left clueless because she doesn't know what and how much her husband has? That's why talking about estate planning with her husband is a must."
      ),
      h("The first step"),
      p(
        "Estate planning and inheritance are two important pillars of one's financial journey. So before you start inculcating the habit of savings in your child, it is essential for you to start talking about such crucial things with your partner."
      ),
    ],
  },
  {
    slug: "cryptocurrency-succession",
    title: "Decoding the succession story of investing in cryptocurrency",
    excerpt:
      "Digital assets are growing but inheritance rules around them remain murky. How to plan succession for your crypto holdings.",
    category: "Digital Assets",
    date: "2022-07",
    readTime: "4 min",
    body: [
      p(
        "If you are familiar with the world of investing, you must have already been tempted to invest in the new rage — cryptocurrency. Buzzwords like Crypto, Bitcoins, etc. have been doing their rounds for some time. Even as the authorities are yet to recognise and regularise it, people are taking the plunge into digital investments."
      ),
      p(
        "However, not many talk about what happens to these digital assets in case of the (untimely) demise of the investor. In the absence of a government ruling on its legality, can there be a nominee, or will the legal heir inherit them?"
      ),
      h("Nominations on exchanges"),
      p(
        "While the Union Budget 2022 did talk about taxation on cryptocurrency, digital assets still lack a concrete succession policy. Several exchanges in India have started introducing a nomination process for its customers. The details of the nominee or the inheritor — name, mobile number, address — can be updated on the exchange website. In case of the demise of the customer, the funds can be transferred to the inheritor's account."
      ),
      h("Include crypto in your will"),
      p(
        "Just like in case of other assets, in case there is a nominee and not an inheritor, the former is the custodian until the legal heir or the inheritor mentioned in the will receives it. Customers should be careful to mention the nominee/inheritor in their will as the legal heir. They can also assign a password and mention it in the will or portfolio."
      ),
      p(
        "Until cryptocurrencies are regulated by the government, they can be included in the will as any other legal asset. An even better idea would be to have a digital portfolio with the information of all your assets and investments so that they are easily accessible."
      ),
    ],
  },
  {
    slug: "live-in-couples-inheritance",
    title: "Are live-in couples eligible for inheritance?",
    excerpt:
      "Live-in relationships have grown common, but inheritance law hasn't quite caught up. Here's where things stand.",
    category: "Rights & Law",
    date: "2022-07",
    readTime: "4 min",
    body: [
      p(
        "In a country like India, where traditions and culture precede most things, accepting the concept of live-in relationships has taken long. However, times have changed, and many youngsters choose to explore living in with their partners before signing up (or not) for a legal commitment. But what about the inheritance and succession laws for live-in partners in India?"
      ),
      h("Legal grey zone"),
      p(
        "There are no legal statutes regarding the validity of live-in relationships in India. However, multiple cases heard in different courts across the country over the years have brought it to the purview of the law. The rulings from these cases, including one by the Supreme Court, have established that such relationships are not illegal and children born to live-in couples would be legitimate. They are legally eligible to inherit their parents' self-acquired assets."
      ),
      h("Partners and inheritance"),
      p(
        "As we all know, you can nominate anyone you wish to give away your assets in your will. If you want to add your live-in partner's name to it, he/she can legally claim the property through a succession certificate. However, if one of the live-in partners has an untimely demise without making a will, then things can get tricky for the other partner if other legal heirs refuse to give them anything."
      ),
      p(
        "If you are in a live-in relationship and want to plan your succession, it would be best if you do it together. Let him/her know what all you possess and who you think should inherit them. You can also have a portfolio on EasyInherit and put all the information in one place."
      ),
    ],
  },
  {
    slug: "social-media-inheritance",
    title: "Social media inheritance: let your account live forever",
    excerpt:
      "Email IDs, social media accounts, photos — what happens to them when you're no longer here? A guide to digital legacy.",
    category: "Digital Assets",
    date: "2022-08",
    readTime: "4 min",
    body: [
      p(
        "Have you ever thought about what happens to these email IDs or social media accounts if something unfortunate happens to you? Who inherits them, or are they dissolved forever? What if they have important information saved?"
      ),
      h("Where the law stands"),
      p(
        "The Indian judicial system is yet to come up with a law for social media inheritance. In fact, there is no specific ruling as to what happens to digital assets like personal photos, important information, or similar things once the account holder is no more. In 2018, a landmark ruling in Germany gave a woman access to her deceased daughter's Facebook account."
      ),
      h("Platform-specific options"),
      p(
        "Despite the lack of a law, social media giants have come up with their respective versions of what happens to the account of a deceased person. Facebook has a feature that 'memorialises' the account of someone who is no more if notified about the same with valid proof. The platform also allows you to add a legacy contact who can access your account in unforeseen situations."
      ),
      p(
        "Similarly, Google has an Inactive Account Manager that lets you decide what happens to your data if you stop using your account. You can choose to share data with trusted contacts or delete the account entirely."
      ),
      h("Plan your digital legacy"),
      p(
        "If you want to leave behind your social media accounts or digital assets for someone or allow them to get access to your account, you can start with saving these details in a portfolio along with all other estate plans you have made."
      ),
    ],
  },
  {
    slug: "nri-succession-path",
    title: "Treading the succession path for NRIs",
    excerpt:
      "13 million Indians live abroad. For NRIs, inheriting from a deceased parent in India is a multi-month maze. Here's the map.",
    category: "NRI & Succession",
    date: "2022-08",
    readTime: "6 min",
    body: [
      p(
        "Currently, more than 13 million Indians live abroad for job opportunities, higher education, et al. Some of them periodically visit India to spend time with family and friends, while others rarely get a chance to fly back. Many of them may have elderly parents or other family members who pass on and leave behind assets as inheritance."
      ),
      p(
        "The loss of a loved one is already a painful feeling. And, if you haven't been around during the unfortunate incident, the grief can be overwhelming. For an NRI, there are many aspects that need to be planned and executed — the journey across continents to be home for the last rites, dealing with the loss while still being jet-lagged, a host of rituals, and well-meaning yet endless queries from well-wishers, all of which can be very exhausting."
      ),
      h("The actual moment of truth"),
      p(
        "By the time everything is taken care of, the actual moment of truth arrives — learning about properties and other financial assets, checking for a will, and deciding on the next course of action. Then begins a never-ending series of calls/visits to lawyers, banks, municipalities, etc., with the stress levels possibly hitting the roof."
      ),
      h("Why NRIs need special attention"),
      p(
        "The alleys of law and government procedures are not always easy to navigate. It can take years of patient follow-ups and dealings with intermediaries. The steps include knowing what all has been inherited, transferring the name from the deceased to the current owner, taking care of taxes, closing bank accounts, following up with insurance and mutual fund companies, redeeming FDs, etc."
      ),
      p(
        "As for NRIs, claiming inherited assets involves taking note of several rules — Specialised Succession Advisories, Wealth Tax, the tax levied in case of repatriation, legitimacy of claims in case of financial assets, and more."
      ),
      h("Plan today"),
      p(
        "If you live abroad and have ageing parents living in India, talking to them about succession may not be easy, but something that's inevitable. The best scenario would be to write a will at the right time or at least to get a consolidated portfolio with information on all assets."
      ),
    ],
  },
  {
    slug: "bequeath-to-non-family-caregivers",
    title: "Want to bequeath assets to caregivers who are nonfamily? Register your will",
    excerpt:
      "Many elderly Indians are cared for by non-family. To pass anything to them, a registered will is the only way.",
    category: "Family Planning",
    date: "2022-09",
    readTime: "5 min",
    body: [
      p(
        "As per a 2020 National Sample Survey, 13.4% of the elderly in rural areas and 15.5% of senior citizens in urban areas live only with their spouses for company. The Varmas joined this demographic group more than a decade ago."
      ),
      p(
        "With all their three children settled abroad, Mr and Mrs Varma — retired senior government officials — have no immediate family members to help them around. Now in their early seventies, they have some health issues as well, including diabetes and arthritis."
      ),
      h("Finding alternate support systems"),
      p(
        "The Varmas have always been close to their former gardener Anil's family. They are particularly fond of his daughters, who live nearby. The two young women practically run the Varma household — from grocery shopping to weeding the garden and the elderly duo's medical appointments, they handle everything."
      ),
      p(
        "An increasing number of elderly couples are coping with the final years of their lives with no help from immediate family or relatives. Many of them have found alternate support systems in their domestic staff, neighbours, friends or local NGOs."
      ),
      h("The legal catch"),
      p(
        "As per the Hindu Succession Act, 1956, children are the natural heirs of their parents' self-acquired property. If a couple is child-free, the inheritance will go to their next of kin, unless specified otherwise in the will."
      ),
      p(
        "So, if you genuinely want to reward those people who have been there for you — who made you feel wanted and cherished when nobody else did — you should not procrastinate registering your will."
      ),
    ],
  },
  {
    slug: "disinherit-prodigal-child",
    title: "Worried about a prodigal child? Register your will to disinherit them",
    excerpt:
      "A 'will' is not just for inheritance — it can also be used to protect your other heirs from a financially reckless child.",
    category: "Family Planning",
    date: "2022-09",
    readTime: "5 min",
    body: [
      p(
        "When you hear the word 'will', the first word that probably comes to your mind is 'inheritance'. But, interestingly, it can also be used to disinherit a natural heir from their parents' self-acquired property under certain circumstances."
      ),
      h("The Kumar story"),
      p(
        "Mr Kumar, who retired as a General Manager from an MNC, and his homemaker wife have three children — two sons and one daughter. While his younger two children are financially stable, the eldest son, Naveen, has turned out to be the 'black sheep of the family.' Academically poor and with no steady job to fall back on, he started at least four business ventures with his father's financial backing, only to send the investments down the drain."
      ),
      p(
        "Mr. Kumar spent a huge part of his savings on Naveen, much to his other two children's displeasure. When he refused to back another venture, Naveen mortgaged his house (gifted by Mr. Kumar) and took a heavy bank loan. History repeated itself and that, too, tanked. With no other source of income, he found himself unable to pay the EMI."
      ),
      p(
        "A few months later, he once again approached Mr. Kumar for help — to be a co-borrower in a bank loan for yet another business venture. It didn't take Mr. Kumar a lot of thinking to realise the danger. If this venture failed, his own house would be at risk."
      ),
      h("The legal solution"),
      p(
        "The family advocate advised him to immediately register his will, disinheriting Naveen from the property. The youngster was given money equivalent to his share in the house. As per Indian law, parents can disinherit a child from their self-acquired property."
      ),
      p(
        "Whether it's a question of inheritance or disinheritance, the key point is to register a will. You have every right to secure the future of your hard-earned assets."
      ),
    ],
  },
  {
    slug: "choosing-will-executor",
    title: "Why having an executor for your will is important and how to choose the right one",
    excerpt:
      "Choosing an executor is one of the most important parts of writing a will. Here's how to choose right.",
    category: "Wills & Estate",
    date: "2022-10",
    readTime: "5 min",
    body: [
      p(
        "When it comes to inheritance bequest, the general perception is that writing the will is the last step. But it is far from so. Though not compulsory as per the Indian Succession Act, one of the most important aspects of making a will is choosing the executor — the legal representative of the testator, who will distribute his/her assets as stated in the will."
      ),
      h("Why nominate an executor?"),
      p(
        "In India, any individual above the age of 18 with a sound mind can become an executor. He/she should also be considerably younger than the testator, likely to outlive him. Once appointed, there are many responsibilities that he/she has to fulfil, starting with meeting the expenses of the testator's last rites."
      ),
      p(
        "Some of the other duties of the executor include obtaining the testator's death certificate, filing an inventory of the assets that are to be disposed of, distributing assets as mentioned in the will, and settling the debts of the testator and collecting money from borrowers."
      ),
      p(
        "Appointing an executor has many advantages. The loved ones of the testator can focus on grieving and healing without having to handle the tedious process of claiming the inheritance. They can also rest assured that the assets will be distributed as mentioned in the will."
      ),
      h("Choosing the right executor"),
      p(
        "An essential factor when choosing the executor is trust — the testator should be sure that the appointee will settle the assets as per his/her will, without bias or fraud. The executor should also be fairly educated and competent enough to fulfil the responsibilities bestowed upon him/her."
      ),
      p(
        "Anyone can be appointed executor, from a family member or friend to a lawyer or financial advisor. Multiple executors can also be appointed while vesting the ultimate authority in the hands of one. New executors can also be assigned if the current one is unable to perform his/her duties or wants to quit."
      ),
    ],
  },
  {
    slug: "women-inheritance-planning",
    title: "Women should take charge of their inheritance planning. Here's how",
    excerpt:
      "Financial independence is the cornerstone of women's empowerment. Inheritance planning deserves equal attention.",
    category: "Family Planning",
    date: "2022-10",
    readTime: "5 min",
    body: [
      p(
        "For most Indian women, does having a job and earning a salary translate into financial independence? Seems not. A recent Tata AIA Life Insurance survey found that 59 per cent of women do not make independent financial decisions. While a shocking 89 per cent of married women are still dependent on their spouses for planning their finances, for 39 per cent, financial planning only involves planning the monthly budget."
      ),
      p(
        "Financial independence is the cornerstone of women's empowerment, and it's high time women handled their hard-earned money and planned their finances. While financial planning is extremely important, inheritance planning deserves equal attention."
      ),
      h("Two-pronged approach"),
      p(
        "Inheritance planning is two-pronged: Upstream and downstream. While the former involves ensuring that your parents have planned their inheritance, the latter is all about doing the same for your children or any other beneficiary you deem fit."
      ),
      h("Upstream"),
      p(
        "Choose the right time for such discussions — when your parents are relatively relaxed. You can initiate a general conversation on the subject and then ask if they have planned their inheritance. If not, make them aware of how important it is to avoid multiple problems in the future."
      ),
      h("Downstream"),
      p(
        "There are many reasons why every woman should write a will. To begin with, at least some inheritance laws in India are biased towards male members. For example, if a Hindu woman dies intestate, her in-laws will inherit her wealth, even if they have played no role in helping her acquire it. Her own family might not inherit even a part of it."
      ),
      p(
        "Again, making a will is also crucial for a woman to ensure her (minor) children's well-being. This holds especially true for single mothers, who can appoint a trusted legal guardian for their little ones."
      ),
    ],
  },
  {
    slug: "transgender-inheritance-rights",
    title: "Inheritance rights of transgenders: challenges on the way ahead",
    excerpt:
      "Inheritance law in India still recognises only two genders. For the transgender community, equality remains a distant dream.",
    category: "Rights & Law",
    date: "2022-11",
    readTime: "5 min",
    body: [
      p(
        "While our Constitution guarantees equality in every sphere of life, including law, to every Indian citizen, the reality is starkly different. The transgender community continues to fight for many of their fundamental rights, including the right to inherit property."
      ),
      h("The gender issue"),
      p(
        "In India, a person's inheritance rights are governed by the personal laws of his/her religion. The fundamental issue is that when it comes to inheritance, only two genders are acknowledged — male and female."
      ),
      p(
        "As per the Hindu Succession Act, 1956, only a male or female is considered to be the 'heir' in the event of someone dying intestate. The only way out for most transgenders to claim their inheritance is by compromising their gender identity — they have to identify themselves as either a male or female, depending on the gender mentioned in their birth certificate. This is a blatant violation of Article 15 of the Indian Constitution, which prohibits any kind of discrimination on grounds of a person's sex."
      ),
      h("The legal side"),
      p(
        "In 2014, in a path-breaking judgement, the Supreme Court recognised a transgender person's right to identify themselves as male, female or the third gender. In 2019, the Transgender Persons (Protection of Rights) Act was passed, prohibiting any discrimination against the community, including their right to hold or dispose of property. However, these laws have failed to address legal issues regarding the community's civil rights, including inheritance."
      ),
      h("The solution: a will"),
      p(
        "With the law recognising only sons and daughters as legal successors, a transgender person's right to inheritance is mired in legal tangles, in the absence of a will. The only solution is for them to be mentioned in the will. If you want a transgender person to inherit some or all of your property, make sure that a will is written."
      ),
    ],
  },
  {
    slug: "will-avoid-property-disputes",
    title: "If you have the 'will', there's a way to avoid property disputes",
    excerpt:
      "Prolonged property disputes are common in India. A will is the simplest way to prevent them.",
    category: "Wills & Estate",
    date: "2022-11",
    readTime: "5 min",
    body: [
      p(
        "Prolonged property disputes are common in our country. While most parties resort to legal action in such a scenario, there have also been many instances of these disputes taking an ugly turn. The conflict often starts when the 'head' of the family passes away intestate (without making a will), leaving behind the surviving heirs and family members to fight over the former's assets. All of these are easily avoidable — that is, if you make a will."
      ),
      h("Why a will is necessary"),
      p(
        "Avoiding property disputes and uncertainty is only one of the many advantages of leaving a will behind. In the absence of a will, it's not easy for your successor(s) to claim their inheritance. Tedious legal procedures await them, and it might be months or even years before they get what is rightfully theirs."
      ),
      p(
        "A will is a must if there are minor children involved. You can appoint a guardian of your choice — someone you trust implicitly — to take care of your children and their inheritance in the will."
      ),
      h("Assets, your way"),
      p(
        "Assets division in the absence of a will might not happen as you envisioned it. For example, you might have wanted to give your youngest child a particular plot of land or a house, but it might go to your eldest one. Or, you might have wanted to give a larger share of your bank savings to one financially weaker child, but the money might be shared equally."
      ),
      h("Hindu Succession Act, 1956"),
      p(
        "As per this Act, if a Hindu married man dies intestate, his children, wife and mother get an equal share in his property. However, if a Hindu married woman passes away without leaving a will, her assets are divided into three categories: self-acquired, inherited from her parents, and inherited from husband/father-in-law."
      ),
      p(
        "Many people desist from making a will, fearing it's too complicated a process. But nothing could be further from the truth. Any Indian adult can make a will if mentally sound and not forced or coerced to create one."
      ),
    ],
  },
  {
    slug: "minor-children-inheritance",
    title: "How to protect minor children and their inheritance",
    excerpt:
      "Inheritance rights of stepchildren, adopted, illegitimate, live-in couples' children and minors — a complete legal guide.",
    category: "Family Planning",
    date: "2022-12",
    readTime: "7 min",
    body: [
      p(
        "For a parent, there's probably nothing more important than securing their children's future. Bank savings, immovable property, jewellery, investments — people leave no stone unturned to ensure a comfortable, financially stable future for their children. But what about safeguarding the legacy that you want to leave behind for them — especially until they become adults legally?"
      ),
      h("Children of divorced couples & stepchildren"),
      p(
        "In the presence of a will, parents' self-acquired property will go to the person(s) named in it. However, if a parent dies intestate, children are the natural heirs. The Hindu Succession Act, 1956 acknowledges children as Class I heirs. This holds true in the case of divorced parents as well. Children of divorced couples also enjoy rights over their parents' ancestral property."
      ),
      p(
        "As per the Hindu Succession Act, 1956, stepchildren do not fall under the category of 'son' or 'daughter'. Hence, they have no legal rights over their step-parents' property if the latter dies intestate. So, if a step-parent wants to leave his property for his stepchild(ren), the only way to do so is through a will."
      ),
      h("Adopted children"),
      p(
        "Parents can leave their self-acquired property to anyone they choose in their will. If they die intestate, adopted children enjoy the same rights as biological offspring. Adopted children cannot stake claim over their biological parents' property unless the latter have written so in their will."
      ),
      h("Illegitimate children"),
      p(
        "According to Section 16 (3) of the Hindu Marriage Act, 1955, illegitimate children can only stake claim over their parents' self-acquired property and have no share in ancestral inheritance (unless a will has been written, bequeathing them something)."
      ),
      h("Live-in couple's children"),
      p(
        "A 2015 Supreme Court ruling stated that couples who have been in a live-in relationship for a long time can be considered married. So, their children will enjoy the same rights as a legal heir and can claim the inheritance of their parents' self-acquired property under Section 16 of the Hindu Marriage Act, 1955."
      ),
      h("Minor children"),
      p(
        "A will attains extreme importance in the case of minor children. While minor kids are the legal heirs, they have no legal authority over it till they become 18 years old. That is, they own the property but cannot exercise any control over it. The property will be 'managed' by a legal guardian appointed by the court, in case the parents have not written a will."
      ),
      p(
        "Another option is to set up a beneficiary trust for minor children so their inheritance can be protected until they become adults."
      ),
    ],
  },
  {
    slug: "inheritance-basics-faq",
    title: "Inheritance: getting the basics right",
    excerpt:
      "Death certificates, succession certificates, nominees vs heirs — every essential inheritance question, answered.",
    category: "Wills & Estate",
    date: "2022-12",
    readTime: "7 min",
    body: [
      p(
        "Inheritance is not just about the money and property a loved one has left behind; it's also their love, legacy and memories. But having said that, inheritance is also, practically speaking, a complicated legal matter in the absence of a will. Let's address some of the most common questions associated with inheritance in the case of intestate death."
      ),
      h("How soon can you claim inheritance?"),
      p(
        "In the event of a loved one's death, you cannot claim any inheritance without a Death Certificate. It is issued by the local authority (Municipal Corporation or Gram Panchayat) and should be applied within 21 days of the demise. This is a relatively fast process and will be issued within five to seven working days."
      ),
      p(
        "However, in the case of an intestate death, there are more legal hurdles. The heirs have to furnish a Succession Certificate — it's issued by the local civil court, acknowledging a person(s) as the rightful inheritor(s) of the movable/immovable properties of the deceased. It could take between five to seven months for you to obtain this document."
      ),
      h("Who can make a claim?"),
      p(
        "In the event of an intestate death, the legal heirs of the deceased can claim inheritance. As per the Hindu Succession Act, 1956/2005, the legal heirs of a Hindu man have been divided into Class I and Class II."
      ),
      p(
        "Class I heirs include the wife, children (including adopted), mother and grandchildren. Class II mainly includes the father, siblings, and their children. In the absence of heirs in both these classes, the inheritance rights go to agnates (relatives from the father's side). If there are no agnates, the legacy can be claimed by cognates (relatives from the mother's side)."
      ),
      p(
        "On the other hand, in the case of a Hindu married woman dying intestate, her husband and children have equal rights over her property (parents are not eligible)."
      ),
      h("Nominee vs heir"),
      p(
        "A nominee, as the term suggests, is someone who has been named in the will to handle the property. He/she is just a caretaker and has no right or ownership over the property. The testator can choose any nominee of his/her choice."
      ),
      p(
        "A legal heir, on the other hand, is someone who is entitled to inherit the property after the owner's death unless a will has been written bequeathing the property to someone else. Inheritance in India is governed by various personal laws, depending on a person's religion."
      ),
      h("Inheritance of minors"),
      p(
        "Parents can bequeath their self-acquired property they wish to anyone in their will. But, in case of an intestate death, as per the Hindu Succession Act, 1956/2005, children are Class I heirs. However, though they are the legal heirs, they have no legal authority over their inheritance till they turn 18 years old. In the case of minor children, the property will be managed by a legal guardian appointed by the court."
      ),
      p(
        "If the parents write a will, they can appoint a guardian of their choice for their minor wards. A beneficiary trust could also be set up for minor kids to secure their inheritance until they become adults."
      ),
    ],
  },
];

/* ─────────── Helpers ─────────── */

export function getBlog(slug: string): Blog | undefined {
  return BLOGS.find((b) => b.slug === slug);
}

/** First 3 blogs shown on the home page. */
export function getFeaturedBlogs(): Blog[] {
  // Hand-picked for breadth of categories on home page.
  const slugs = [
    "nri-inheritance-aging-parents",
    "executing-a-will-6-steps",
    "minor-children-inheritance",
  ];
  return slugs
    .map((s) => BLOGS.find((b) => b.slug === s))
    .filter((b): b is Blog => Boolean(b));
}

export function getRelatedBlogs(currentSlug: string, count = 3): Blog[] {
  const current = getBlog(currentSlug);
  if (!current) return BLOGS.slice(0, count);
  return BLOGS.filter(
    (b) => b.slug !== currentSlug && b.category === current.category
  )
    .slice(0, count);
}

export function formatBlogDate(iso: string): string {
  // iso is YYYY-MM
  const [y, m] = iso.split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1);
  return date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

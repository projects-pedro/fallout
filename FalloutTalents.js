const talents = [
	{
		"id": 0,
		"talent": "ACROBATIC STRIKE",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your dexterous maneuvers and skilled acrobatics allow you to slip past a foe's defenses and deliver an accurate strike against him. You must attempt at a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coordination check as part of your attack. Whether or not this Coordination check succeeds or fails, you suffer 3 Strain. If you succeed, you gain a <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> bonus on the Brawl or Melee combat check that you make against that foe as long as the attack occurs before the end of your current turn.",
		"rate": "",
		"summary": "3 Strain &amp; Hard Coordination check as part of attack : gain <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> bonus on Brawl or Melee check against that foe before the end of your current turn"
	},
	{
		"id": 1,
		"talent": "ACTION BOY",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Action Boy (or Action Girl depending on your character's gender) allows you to add an additional Story Point to the player pool.",
		"rate": "",
		"summary": "Action Boy (or Girl) allows you to add an additional Story Point to the player pool"
	},
	{
		"id": 2,
		"talent": "ACTION BOOST",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "You have the ability to alter your luck drastically in dire circumstances. Spend one Story Point to flip a positive dice to any adjacent side. For each rank beyond the first, Action Boost applies to an additional positive die.",
		"rate": "",
		"summary": "Spend 1 Story Point to flip 1 positive dice per rank to any adjacent side"
	},
	{
		"id": 3,
		"talent": "ACTION SURGE",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You can spend 1 Story Point to take an extra Action or Maneuver in a turn, either before or after your regular actions. This would allow you to surpass the limitation of 2 Maneuvers per turn.",
		"rate": "",
		"summary": "Spend 1 Story Point to take an extra Action or Maneuver in a turn"
	},
	{
		"id": 4,
		"talent": "ADAPTABLE FLANKER",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When you and an ally team up against a foe, you know how to maximize the threat your ally poses to ruin your target's defenses. As an Incidental, you designate a single opponent as the target of this talent. When you are in Engaged range with the chosen target, you grant a <span data-dice='g' title='boost dice (blue)'>g</span> to combat checks other make against this particular target.",
		"rate": "",
		"summary": "When Engaged with the chosen target, you grant <span data-dice='g' title='boost dice (blue)'>g</span> to combat checks allies make against the target"
	},
	{
		"id": 5,
		"talent": "ADROITNESS",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "When first acquired, choose a General skill. When making a check with that skill, reduce the time required by 25%. The GM may determine that this talent may not be used with certain skills or activities.",
		"rate": "",
		"summary": "When first acquired, choose a General skill: using that skill, reduce the time required by 25%"
	},
	{
		"id": 6,
		"talent": "AGENT 47",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Whenever you score a Critical Injury with an attack while you are hidden, you may roll twice for a Critical Injury effect and select whichever you prefer.",
		"rate": "",
		"summary": "When scoring a Critical Injury while hidden, roll twice for a Critical Injury effect and select whichever you prefer"
	},
	{
		"id": 7,
		"talent": "ALL-TERRAIN DRIVER",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Do not suffer usual penalties for driving through difficult terrain when using the Driving skill.",
		"rate": ""
	},
	{
		"id": 8,
		"talent": "ALLURING",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Others have an inexplicable urge to believe your every word. Add automatic <span data-result='a' title='advantage'>a</span> to Charm, Coercion, Deception, Leadership and Negotiation skill checks per rank of Alluring.",
		"rate": "",
		"summary": "Add <span data-result='a' title='advantage'>a</span> per rank to Charm, Coercion, Deception, Leadership and Negotiation skill checks",
		"marked": false
	},
	{
		"id": 9,
		"talent": "AMBUSH",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Once per turn while benefiting from cover, may make the Ambush Maneuver. Add damage equal to Stealth skill to one hit of next successful combat check against a target within Short range before the end of the turn.",
		"rate": "Turn",
		"summary": "When on cover, add damage equal to Stealth to 1 hit of next combat check against a target within Short range before end of the turn"
	},
	{
		"id": 10,
		"talent": "ANIMAL COMPANION",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character creates a bond with a single animal or drone approved by your GM. This animal must be Silhouette 0 (no larger than a mid-sized dog). The bond persists as long as your character chooses, although at your GM's discretion, the bond may also be broken due to abusive treatment or other extenuating circumstances. As long as the bond persists, the animal follows your character, and you dictate the animal's overall behavior (although, since the animal is only bonded with the character, not dominated, it may still perform inconvenient actions such as scratching furniture, consuming rations, and marking territory). Once per turn in structured encounters, your character may spend one Maneuver to direct their animal in performing one Action and one Maneuver during your character's turn. The animal must be within hearing and visual range of your character (generally Medium range) to do this. Otherwise, the animal does not contribute to the encounter. The specifics of its behavior are up to you and your GM. For every additional rank of Animal Companion your character has, increase the allowed Silhouette of the companion by one (this may mean your character gets a new companion, or their companion grows in size).",
		"rate": "Turn",
		"summary": "Spend 1 Maneuver to make your animal (Silhouette 0 + 1/add rank) do 1 Action and 1 Maneuver during your turn if within hearing and visual range (~Medium)"
	},
	{
		"id": 11,
		"talent": "ANIMAL EXPERTISE",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Animal Expertise to all checks when interacting with beast or animals (including combat checks). Add +10 to Critical Injury results against beasts or animals per rank of Animal Expertise.",
		"rate": "",
		"summary": "Add <span data-dice='g' title='boost dice (blue)'>g</span> / rank to all checks when interacting with beast or animals &amp; +10 / rank to Critical Injury"
	},
	{
		"id": 12,
		"talent": "ANT STYLE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "The ant style emphasizes active defense with one hand. Students of the unarmed Brawl style utilize a variety of locks, grabs, and circular blocks to protect themselves, as well as employing a debilitating clutch. While using the ant style talent with at least one hand free, you gain a +1 Ranged Defense. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Deathclaw Style and Cazador Style, you can use an Incidental to adopt Cazador Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Deathclaw Style.",
		"rate": "",
		"summary": "if one hand free: +1 Ranged Defense"
	},
	{
		"id": 13,
		"talent": "ANTICIPATE DODGE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Your knowledge of mobility and your attack prowess allow you to thwart elusive opponents. You automatically know whether a creature you can is benefiting from the Dodge talent. You gain a <span data-dice='g' title='boost dice (blue)'>g</span> bonus per rank of Anticipate Dodge on combat checks against a target that is using the Dodge talent. This bonus cannot exceed the ranks of Dodge the creature is using.",
		"rate": "",
		"summary": "Know when a creature in sight has Dodge and gain <span data-dice='g' title='boost dice (blue)'>g</span> per rank (&lt;= its ranks in Dodge) on combat checks if true"
	},
	{
		"id": 14,
		"talent": "ARMOR MASTER",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "When wearing armor, increase total Soak value by 1.",
		"rate": ""
	},
	{
		"id": 15,
		"talent": "ARMOR MASTER (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Armor Master talent to benefit from this talent. When wearing armor with a Soak value of 2 or higher, increase Defense by 1.",
		"rate": "",
		"requiresId": 14,
		"requires": "ARMOR MASTER"
	},
	{
		"id": 16,
		"talent": "ARMOR MASTER (SUPREME)",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Armor Master (Improved) talent to benefit from this talent. Once per turn, when the character suffers a Critical Injury, he may suffer 3 Strain to take the Armor Master incidental. If he does he reduces the Critical Injury result that he suffers by 10 per point of his Soak, to a minimum of 1.",
		"rate": "Turn",
		"requiresId": 15,
		"requires": "ARMOR MASTER (IMPROVED)",
		"summary": "When Critically Injured, 3 Strain => reduce the Critical Injury by 10 per point of Soak (min 1)"
	},
	{
		"id": 17,
		"talent": "ASSASSIN STRIKE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "After making a successful Brawl or Melee check, may spend a Story Point to disengage from an opponent as an Incidental.",
		"rate": "",
		"summary": "On successful Brawl or Melee check, use 1 Story Point to disengage from an opponent"
	},
	{
		"id": 18,
		"talent": "BACK-TO-BACK",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "While engaged with one or more allies, your character and allies they are Engaged with add <span data-dice='g' title='boost dice (blue)'>g</span> to combat checks. If one or more allies Engaged with your character also have the Back-to-Back talent, the effects are cumulative to a maximum of <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span>.",
		"rate": ""
	},
	{
		"id": 19,
		"talent": "BACKSTAB",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may use this talent to attack an unaware adversary using a Melee weapon. A Backstab is a Melee attack, and follows the normal rules for performing a combat check (see page 101 of the GENESYS core rulebook), using the character's Skuduggery skill instead of Melee. If the check succeeds, each uncanceled <span data-result='s' title='success'>s</span> adds +2 damage (instead of the normal +1).",
		"rate": ""
	},
	{
		"id": 20,
		"talent": "BAD COP",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "May spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> from a Deception or Coercion check to upgrade ability of a single ally's subsequent Social Interaction check against the target a number of times equal to ranks in Bad Cop.",
		"rate": ""
	},
	{
		"id": 21,
		"talent": "BAD PRESS",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, choose an organization and make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Deception check. On success, organization members have their Strain thresholds reduced by 1, plus 1 per <span data-result='s' title='success'>s</span><span data-result='s' title='success'>s</span><span data-result='s' title='success'>s</span>, until the end of the session. When he does this, the player must explain how the PC disseminated the propaganda such that it has affected his targets. The chosen organization must be narrow and cohesive enough to be affected by bad publicity.",
		"rate": "Session"
	},
	{
		"id": 22,
		"talent": "BALEFUL GAZE",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When targeted by combat check from within Medium range, may spend a Story Point to upgrade the difficulty of the check a number of times equal to ranks in Coercion.",
		"rate": ""
	},
	{
		"id": 23,
		"talent": "BARRAGE",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add 1 damage per rank of Barrage to one hit of successful attack while using Ranged [Heavy] or Gunnery skills at Long or Extreme range.",
		"rate": ""
	},
	{
		"id": 24,
		"talent": "BARREL ROLL",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character can only use this talent while piloting an airplane of Silhouette 3 or less. When your vehicle suffers a hit from a ranged combat check, after damage is calculated but before Armor is applied, your character may have their vehicle suffer 3 System Strain to use this talent. Then, reduce the damage suffered by a number equal to their ranks in Piloting.",
		"rate": ""
	},
	{
		"id": 25,
		"talent": "BASIC MILITARY TRAINING",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Athletics, Ranged [Heavy], and Resilience are now career skills for your character.",
		"rate": ""
	},
	{
		"id": 26,
		"talent": "BEAUTIFUL BEATDOWN",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You are no stranger to physical punishment. Any unarmed Brawl combat check against you deal 1 less damage per rank of Beautiful Beatdown after the combat check has been resolved.",
		"rate": ""
	},
	{
		"id": 27,
		"talent": "BIGGEST FAN",
		"tier": 5,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may take a Biggest Fan Action; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Charm check to turn one NPC into the character's biggest fan. The exact effects of this vary depending on the NPC and the situation. They can include drastically decreasing the difficulty of Social Interaction skill checks the character makes targeting his biggest fan, the fan being willing to perform minor or even significant favors for the character, or the character even becoming a reoccurring ally in the narrative. At the CM's discretion, this talent may not be able to target certain NPCs whose adversarial nature is vital to the plot, or NPCs who would be unable to appreciate the character's work.",
		"rate": "Session"
	},
	{
		"id": 28,
		"talent": "BLACK MARKET CONTACT",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When purchasing illegal goods, may reduce rarity by 1 per rank of Black Market Contacts, increasing cost by 50 percent of base cost per reduction.",
		"rate": ""
	},
	{
		"id": 29,
		"talent": "BLACK WIDOW / LADY KILLER",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You're charming... and dangerous! Nemesis adversaries suffer an additional Wound in combat whenever you deal damage, and you can remove a <span data-dice='b' title='setback dice (black)'>b</span> from Charm, Coercion, Deception, Leadership and Negotiation checks when dealing with the nemesis adversaries.",
		"rate": ""
	},
	{
		"id": 30,
		"talent": "BLACKMAIL",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When an NPC exceeds his Strain threshold, may spend 1 Story Point to convince that NPC to perform a single task of choice instead.",
		"rate": ""
	},
	{
		"id": 31,
		"talent": "BLIND SPOT",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character, and allies within Short range, add automatic <span data-result='a' title='advantage'>a</span> to combat checks they make while benefiting from cover.",
		"rate": ""
	},
	{
		"id": 32,
		"talent": "BLINDSENSE",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "As long as your character can hear, you may ignore <span data-dice='b' title='setback dice (black)'>b</span> imposed by darkness or blindness within Short range. Each additional rank increases range.",
		"rate": ""
	},
	{
		"id": 33,
		"talent": "BLOODY ASSAULT",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Sacrificing accuracy, you can inflict bloody wounds that are slow to heal. You can choose to take a <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> penalty on all Melee or Ranged combat checks to inflict 1 Wound of bleed damage with your attack, in addition to the normal damage dealt by the weapon. A creature continues to take bleed damage every turn at the start of its turn, and cannot soak this bleed damage.. Bleed damage can be stopped by an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Medicine check or through a stimpak. Bleed damage from this talent does not stack with itself. You must choose to use this talent before making the combat check, and its effects last until your next turn (although the bleeding lasts until healed, as normal).",
		"rate": ""
	},
	{
		"id": 34,
		"talent": "BODY GUARD",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn, may suffer a number of Strain no greater than ranks in Body Guard to use this talent. Choose one ally Engaged with your character; until the end of your character's next turn, upgrade the difficulty of all combat checks targeting that ally a number of times equal to the Strain suffered.",
		"rate": "Turn"
	},
	{
		"id": 35,
		"talent": "BODY GUARD (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Body Guard talent to benefit from this talent. Once per session, when an ally protected by the Body Guard Maneuver suffers a hit, suffer the hit instead.",
		"rate": "Session",
		"requiresId": 34,
		"requires": "BODY GUARD"
	},
	{
		"id": 36,
		"talent": "BODY GUARD (SUPREME)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Body Guard (Improved) talent to benefit from this talent. Body Guard Maneuver may protect a number of Engaged characters up to ranks in Resilience.",
		"rate": "",
		"requiresId": 35,
		"requires": "BODY GUARD (IMPROVED)"
	},
	{
		"id": 37,
		"talent": "BOLSTERED ARMOR",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Increase the Armor value of Signature Vehicle by 1 per rank of Bolstered Armor.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 38,
		"talent": "BOUGHT INFO",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "When making a Knowledge skill check, your character can instead use this talent to spend an amount of bottle caps equal to fifty times the difficulty of the check and automatically succeed on the knowledge check with one uncanceled <span data-result='s' title='success'>s</span> (instead of rolling). At your GM's discretion, your character may not be able to use Bought Info if the information is particularly sensitive or difficult to find, or buying it doesn't make narrative sense.",
		"rate": ""
	},
	{
		"id": 39,
		"talent": "BRACE",
		"tier": 1,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "As a Maneuver, the character may Brace himself. This allows a character to remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Brace from the next skill check based on changing conditions, inclement weather, unstable surfaces, zero gravity, heavy gravity, or other disruptive physical obstacles that would make a skill check more difficult.",
		"rate": ""
	},
	{
		"id": 40,
		"talent": "BRILLIANT EVASION",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per vehicle encounter, your character may take Brilliant Evasion Action. Select 1 opponent and make Opposed Driving or Piloting check to stop opponent from attacking character for rounds equal to Agility.",
		"rate": "Encounter"
	},
	{
		"id": 41,
		"talent": "BROAD DAYLIGHT",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You can use the built-in light in your Pip-Boy without imposing any <span data-dice='b' title='setback dice (black)'>b</span> penalty to Stealth checks while the light is on.",
		"rate": ""
	},
	{
		"id": 42,
		"talent": "BULLHEADED",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your stubbornness and determination is legendary. You are exceptionally headstrong and difficult to sway from your course. You add <span data-dice='g' title='boost dice (blue)'>g</span> to skill checks against fear effects. Furthermore, you cannot become Disoriented.",
		"rate": ""
	},
	{
		"id": 43,
		"talent": "BULLRUSH",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character makes a Brawl or Melee combat check after using a Maneuver to engage a target, you may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> to use this talent to knock the target prone and move them up one range band away from your character.",
		"rate": ""
	},
	{
		"id": 44,
		"talent": "BULLWARK",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Parry talent to benefit from this talent. While wielding a weapon with the Defensive quality, your character may use Parry to reduce the damage of an attack targeting an Engaged ally.",
		"rate": "",
		"requiresId": 299,
		"requires": "PARRY"
	},
	{
		"id": 45,
		"talent": "BURLY",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Reduce any wielded weapon's Cumbersome quality and Encumbrance rating by a number equal to ranks in Burly to a minimum of 1.",
		"rate": ""
	},
	{
		"id": 46,
		"talent": "CALL 'EM",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Do not add <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> to combat checks due to the use of the Aim Maneuver if targeting a specific object or location.",
		"rate": ""
	},
	{
		"id": 47,
		"talent": "CAN'T WE TALK ABOUT THIS?",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character can use this talent to make an opposed Charm or Deception versus Discipline check targeting a single non-nemesis adversary within Medium range. If the check succeeds, the target cannot attack your character (or perform hostile actions against your character) until the end of their next turn. You may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to increase the length of the effect by one additional turn, and spend <span data-result='x' title='triumph'>x</span> to extend the benefits to all of their identified allies within Short range. The effect ends immediately if your character or a known ally attacks the target. In addition, your GM may rule that some targets are immune to this ability. An automated sentry turret, for example, has no interest in resolving a conflict through talking, nor would someone consumed by rage and the desire for revenge against your character.",
		"rate": ""
	},
	{
		"id": 48,
		"talent": "CANNIBAL",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Feast on mortal flesh to heal your Wounds. Eating human corpses has the effect of a single stimpak usage for you. Note that this counts against the daily stimpak usage.",
		"rate": ""
	},
	{
		"id": 49,
		"talent": "CAPITAL SENDOFF",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Take a Capital Sendoff Action targeting two vehicles at Close range; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Cool check to cause the targets to suffer a minor collision.",
		"rate": ""
	},
	{
		"id": 50,
		"talent": "CAPITAL SENDOFF (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Capital Sendoff talent to benefit from this talent. When performing a Capital Sendoff, the targets suffer a major collision instead.",
		"rate": "",
		"requiresId": 49,
		"requires": "CAPITAL SENDOFF"
	},
	{
		"id": 51,
		"talent": "CAREFUL PLANNING",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per game session, the character can choose to introduce a \"fact\": or additional context directly into the narrative as if he had spent a Story Point.",
		"rate": "Session"
	},
	{
		"id": 52,
		"talent": "CATCH-OFF-GUARD",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Foes are surprised by your skilled use of unorthodox and improvised weapons. You do not suffer any <span data-result='t' title='threat'>t</span> penalties for using an improvised Melee weapon.",
		"rate": ""
	},
	{
		"id": 53,
		"talent": "CATFALL",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When rolling Athletics or Coordination to reduce damage from falling, add <span data-dice='g' title='boost dice (blue)'>g</span>. In addition, reduce damage and Strain suffered from a fall by 1 per rank of Catfall.",
		"rate": ""
	},
	{
		"id": 54,
		"talent": "CAVE DWELLER",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "After your character makes a Perception, Vigilance, or Knowledge check to notice, identify, or avoid a threat in a cavern, subterrean ruin, or similar location, your character cancels a number of uncanceled <span data-result='f' title='failure'>f</span> no greater than your character's ranks in Cave Dweller.",
		"rate": ""
	},
	{
		"id": 55,
		"talent": "CAZADOR STYLE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Cazador style focuses on defense and agile counterattacks. Practitioners are known for graceful, one-legged stances and folding arm techniques that mimic a cazador's enormous wings. You do not take the usual <span data-dice='b' title='setback dice (black)'>b</span> penalty on attack rolls for Guarded Stance. While using this style and Guarded Stance, you gain an additional +1 Melee Defense while fighting unarmed using Brawl skill only. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Mantis Style and Deathclaw Style, you can use an Incidental to adopt Deathclaw Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Mantis Style.",
		"rate": ""
	},
	{
		"id": 56,
		"talent": "CENTER OF BEING",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "While wielding a weapon with the Defensive quality, your character may perform a Center of Being maneuver. Until the beginning of your character's next turn, whenever an enemy makes a melee attack targeting them, the critical rating of the enemy's weapon counts as 1 higher per rank of Center of Being.",
		"rate": ""
	},
	{
		"id": 57,
		"talent": "CENTER OF BEING (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Center of Being talent to benefit from this talent. Suffer 1 Strain to use a Center of Being Maneuver as an Incidental.",
		"rate": "",
		"requiresId": 56,
		"requires": "CENTER OF BEING"
	},
	{
		"id": 58,
		"talent": "CHALLENGE!",
		"tier": 1,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per encounter, your character may use a Maneuver to use this talent to choose a number of adversaries within Short range no greater than your character's ranks in Challenge! (a minion group counts as a single adversary for this purpose). You have to succeed on a Coercion check against the adversaries to make use of the talent. Until the encounter ends or your character is incapacitated, these adversaries add <span data-dice='g' title='boost dice (blue)'>g</span> to combat checks targeting your character and <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> to combat checks targeting other characters.",
		"rate": "Encounter"
	},
	{
		"id": 59,
		"talent": "CHEM RESISTANT",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "All the rush without the hassle! You add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Chem Resistant to all checks to avoid addiction when consuming chems.",
		"rate": ""
	},
	{
		"id": 60,
		"talent": "CHEMIST",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Any chem you take lasts twice as long. Far out.",
		"rate": ""
	},
	{
		"id": 61,
		"talent": "CHERCHEZ LA FEMME / CONFIRMED BACHELOR",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "This talent allows you to deal increase any damage dealt to the opposite sex of whatever gender your character is by one point. Furthermore, you also gain a <span data-dice='g' title='boost dice (blue)'>g</span> to all Charm, Coercion, Deception, Leadership and Negotiation checks you make against members of the opposite sex.",
		"rate": ""
	},
	{
		"id": 62,
		"talent": "CHILD AT HEART",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "The Child at Heart talent improves your interactions with children (and even some adults at the GMs option), allowing you to decrease the difficulty on a single Social interaction skill check involving a child.",
		"rate": ""
	},
	{
		"id": 63,
		"talent": "CHOPSHOP EXPERTISE",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Your character may make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check when at a dry dock, mechanics garage, etc. with suitable personnel and equipment to conduct repairs to a vehicle, or to add attachments or modifications to one. If successful, the cost and time for repairs is reduced by 20% for each rank of Chopshop Expertise to a minimum of 100 bottle caps and one day.",
		"rate": ""
	},
	{
		"id": 64,
		"talent": "CHOSEN FOE",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "At the expense of attention to other distractions, you focus on a single opponent to give you a decided advantage while fighting against him. Once during your turn, as an Incidental, you can designate a single opponent. You gain on <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Chosen Foe on all combat checks you make against this opponent. You also gain 1 Defense Rating against this opponent, this doesn't increase with ranks in Chosen Foe, however. The effects last until the end of your next turn. In exchange, you take <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> on combat checks against other opponents, and other opponents gain a <span data-dice='g' title='boost dice (blue)'>g</span> on combat checks against you.",
		"rate": "Turn"
	},
	{
		"id": 65,
		"talent": "CLEVER RETORT",
		"tier": 1,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per encounter, your character may use this talent to add automatic <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to another character's Social skill check.",
		"rate": "Encounter"
	},
	{
		"id": 66,
		"talent": "CODE BREAKER",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Codebreaker from your attempts to break codes or decrypt communications.",
		"rate": ""
	},
	{
		"id": 67,
		"talent": "COLLECTOR OF STORIES",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You've heard so many tales of legendary monsters that you remember all sorts of gory details. When you attempt a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to identify a creature or to learn its special powers or vulnerabilities.",
		"rate": "",
		"summary": "Hard Knowledge check to identify a creature or to learn its special powers or vulnerabilities",
		"marked": false
	},
	{
		"id": 68,
		"talent": "COMBAT VETERAN",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> to all Brawl and Discipline skill checks.",
		"rate": ""
	},
	{
		"id": 69,
		"talent": "COMMAND",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Command when making Leadership checks. Affected targets add <span data-dice='g' title='boost dice (blue)'>g</span> to Discipline checks for next 24 hours.",
		"rate": ""
	},
	{
		"id": 70,
		"talent": "COMMANDING PRESENCE",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may take Commanding Presence Action; make an opposed Cool vs. Discipline check to force target within Short range to leave the encounter.",
		"rate": "Session"
	},
	{
		"id": 71,
		"talent": "COMPLIMENTARY INSIGHT",
		"tier": 1,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "You get more out of having skills that work well together with others. You add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> when using the assist option, instead of the normal <span data-dice='g' title='boost dice (blue)'>g</span>.",
		"rate": "",
		"summary": "Add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> on assist instead of 1"
	},
	{
		"id": 72,
		"talent": "COMRADES IN ARMS",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Discipline check. If successful, you plus one ally per <span data-result='s' title='success'>s</span> within Medium range gains +1 Defense for the remainder of the encounter. Effects end if affected targets move beyond Medium range.",
		"rate": "Encounter"
	},
	{
		"id": 73,
		"talent": "COMRADES IN ARMS (IMPROVED)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Comrades in Arms talent to benefit from this talent. Spend <span data-result='x' title='triumph'>x</span> or <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> when performing Comrades in Arms to also gain +1 Soak or give one affected ally +1 Soak.",
		"rate": "",
		"requiresId": 72,
		"requires": "COMRADES IN ARMS"
	},
	{
		"id": 74,
		"talent": "CONCUSSIVE ATTACK",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Your attacks can damage your opponent's ability to think clearly. On a successful attack you can spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to imposes a <span data-dice='b' title='setback dice (black)'>b</span> penalty on the target's Intellect and Willpower skill checks for 1 turn. For each rank beyond the first in Concussive Attack, you extend the duration by 1 turn.",
		"rate": ""
	},
	{
		"id": 75,
		"talent": "CONDITIONED",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "The character removes <span data-dice='b' title='setback dice (black)'>b</span> per rank of Conditioned from his Athletics and Coordination checks. He reduces the damage and Strain suffered from falling by 1 per rank of Conditioned.",
		"rate": ""
	},
	{
		"id": 76,
		"talent": "CONFIDENCE",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "May decrease difficulty of Discipline checks to avoid fear by 1 per rank of Confidence, to a minimum of Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>).",
		"rate": ""
	},
	{
		"id": 77,
		"talent": "CONFIDENCE (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Confidence talent to benefit from this talent. May spend <span data-result='a' title='advantage'>a</span> on a fear check to steady the nerves of allies making the same fear check. If the character does so each ally within Short range who makes the fear check adds automatic <span data-result='s' title='success'>s</span> equal to the character's rank in Confidence.",
		"rate": "",
		"requiresId": 76,
		"requires": "CONFIDENCE"
	},
	{
		"id": 78,
		"talent": "CONGENIAL",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "May suffer a number of Strain to downgrade difficulty of Charm or Negotiation checks or upgrade difficulty when target by Charm or Negotiation checks, by an equal number Strain suffered this way cannot exceed ranks in Congenial.",
		"rate": ""
	},
	{
		"id": 79,
		"talent": "CONSTANT VIGILANCE",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "May always use Vigilance when making checks to determine Initiative.",
		"rate": ""
	},
	{
		"id": 80,
		"talent": "CONSTRUCTION SPECIALIST",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character removes one <span data-dice='b' title='setback dice (black)'>b</span> per rank of Construction Specialist from checks made to construct bases, defense works, positions, fortifications, tunnels, bunkers, and similar combat engineering projects.",
		"rate": ""
	},
	{
		"id": 81,
		"talent": "COORDINATED ASSAULT",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn, your character may use this talent to have a number of allies engaged with your character equal to your ranks in Leadership add <span data-result='a' title='advantage'>a</span> to all combat checks they make until the end of your character's next turn. The range of this talent increases by one band per rank of Coordinated Assault beyond the first.",
		"rate": "Turn"
	},
	{
		"id": 82,
		"talent": "COORDINATED DODGE",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Dodge talent to benefit from this talent. When targeted by a combat check, may spend 1 Story Point to add <span data-result='f' title='failure'>f</span> equal to ranks in Coordination to the combat check.",
		"rate": "",
		"requiresId": 120,
		"requires": "DODGE"
	},
	{
		"id": 83,
		"talent": "COUNTERATTACK",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Improved Parry talent to benefit from this talent. When your character uses the Improved Parry talent to hit an attacker, they may also activate an item quality of the weapon they used as if they had generated <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> on a combat check using that weapon.",
		"rate": "",
		"requiresId": 300,
		"requires": "PARRY (IMPROVED)"
	},
	{
		"id": 84,
		"talent": "COUNTEROFFER",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, your character may use this talent to choose one non-nemesis adversary within Medium range and make an opposed Negotiation versus Discipline check. If successful, the target becomes Staggered until the end of their next turn. At your GM's discretion, you may spend <span data-result='x' title='triumph'>x</span> on this check to have the adversary become an ally until the end of the encounter. However, the duration of this may be shortened or extended depending on whether your GM feels your offer is appealing to the adversary and whether your character follows through on their offer!",
		"rate": "Session"
	},
	{
		"id": 85,
		"talent": "COYOTE STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "This crafty unarmed Brawl style improves its practitioners' chances to feint and to avoid sneaky tactics employed by their foes, and also expands their ability to deploy other devious and dirty tricks. Your martial training helps you manipulate foes. While using this style, you can use your Brawn characteristic in place of your Willpower when you use Coercion. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Mantis Style and Deathclaw Style, you can use an Incidental to adopt Mantis Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Deathclaw Style.",
		"rate": ""
	},
	{
		"id": 86,
		"talent": "CRACK SHOT",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You are skilled at making wellplaced shots at targets behind cover. When you make a Ranged combat check against an opponent behind cover, the target's cover does not give you any <span data-dice='b' title='setback dice (black)'>b</span> on your combat check.",
		"rate": ""
	},
	{
		"id": 87,
		"talent": "CRASHING WAVE STYLE",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Someone skilled in this unarmed Brawl style jostles and pulls her opponents about, inspired by the power of ocean waves churning upon the shore. You relentlessly push your enemies around, as the sea moves those within and upon it against their will. When an opponent disengages from you and moves away from your position, you can take 3 Strain and immediately follow the opponent, even if you have used your Maneuvers for this turn. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Radroach Style and Cazador Style, you can use an Incidental to adopt Radroach Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Cazador Style.",
		"rate": ""
	},
	{
		"id": 88,
		"talent": "CREATIVE DESIGN",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "As part of resolving a successful crafting check, your character may also apply a result equivalent to spending a number of <span data-result='a' title='advantage'>a</span> equal to their ranks in Creative Design. The GM may then apply a result equivalent to the same number of <span data-result='t' title='threat'>t</span>.",
		"rate": ""
	},
	{
		"id": 89,
		"talent": "CREATIVE KILLER",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Reduce the critical rating of improvised weapons by 2 (to a minimum of 1).",
		"rate": ""
	},
	{
		"id": 90,
		"talent": "CRITICAL MASTERY",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your Critical Injuries cause two additional effects. When you score a Critical Injury, you can spend a Story Point, and you can apply the effects of two Critical Injuries in addition to the damage dealt. You must roll twice to determine the effects of the Critical Injuries. Note that you do not add +10 to the second Critical Injury from the first determined result when using this talent.",
		"rate": ""
	},
	{
		"id": 91,
		"talent": "CRUSHING BLOW",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session after rolling a Melee attack but before resolving the check, your character may suffer 4 Strain to use this talent. While resolving the check, the weapon gains the Breach 1 and Knockdown item qualities.",
		"rate": "Session"
	},
	{
		"id": 92,
		"talent": "CUSTOM LOADOUT",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. May add one mount for a weapon or piece of equipment (approved by the GM).",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 93,
		"talent": "CUSTOMIZED COOLING UNIT",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Increase the System Strain threshold of Signature Vehicle by 2 per rank of Customized Cooling Unit.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 94,
		"talent": "CUTTING QUESTION",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per encounter, when making a Coercion skill check, the character may use Deception skill instead.",
		"rate": "Encounter"
	},
	{
		"id": 95,
		"talent": "DAREDEVIL",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Once per session, when performing a skill check of Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) or higher difficulty, you add <span data-dice='g' title='boost dice (blue)'>g</span> to your roll for every rank of Daredevil your character has.",
		"rate": "Session"
	},
	{
		"id": 96,
		"talent": "DARING AVIATOR",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Before your character makes a Driving or Piloting check, they may add a number of <span data-result='t' title='threat'>t</span> to the results to use this talent to add an equal number of <span data-result='s' title='success'>s</span>. The number may not exceed your character's ranks in Daring Aviator.",
		"rate": ""
	},
	{
		"id": 97,
		"talent": "DARING TURN",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "When an opponent has Gained the Advantage on a vehicle being piloted, may spent 2 Strain perform a Daring Turn Maneuver to remove the effects.",
		"rate": ""
	},
	{
		"id": 98,
		"talent": "DEADEYE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "After your character inflicts a Critical Injury with a ranged weapon and rolls the result, your character may suffer 2 Strain to use this talent. Then, you may select any Critical Injury of the same severity to apply to the target instead.",
		"rate": ""
	},
	{
		"id": 99,
		"talent": "DEADLY ACCURACY",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Choose one combat skill. The character may add his ranks in that combat skill as additional damage to one hit of a successful attack made with that skill made with non-vehicle weapons.",
		"rate": ""
	},
	{
		"id": 100,
		"talent": "DEATH RAGE",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character adds +2 damage to Brawl and Melee attacks for each Critical Injury they are currently suffering. (Your GM may also impose additional penalties on Social skill checks your character makes if they are suffering Critical Injuries due to their frenzied behavior.)",
		"rate": ""
	},
	{
		"id": 101,
		"talent": "DEATHCLAW STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "This unarmed Brawl style seeks to emulate the power and fury of the great deathclaw. Practitioners use their hands like claws, perfecting overpowering double hand strikes and driving attack chains. While using this style, whenever you score a Critical Injury with your unarmed Brawl strike, your opponent also takes 1 point, which cannot be soaked, of bleed damage at the start of his next two turns. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Radroach Style and Mantis Style, you can use an Incidental to adopt Radroach Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Mantis Style.",
		"rate": ""
	},
	{
		"id": 102,
		"talent": "DEBILITATING SHOT",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Upon successful attack with a vehicle weapon, may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to reduce the maximum speed of the target by 1 until the end of the next turn.",
		"rate": ""
	},
	{
		"id": 103,
		"talent": "DECEPTIVE TAUNT",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may make Deceptive Taunt Action. Make opposed Deception check. If successful, one adversary must attack the character during adversary's next turn.",
		"rate": "Session"
	},
	{
		"id": 104,
		"talent": "DEDICATION",
		"tier": 5,
		"activation": "Passive",
		"ranked": true,
		"description": "Each rank of Dedication increases one of your character's characteristics by one. This talent cannot increase a characteristic above 5. You cannot increase the same characteristic with Dedication twice.",
		"rate": "",
		"marked": false,
		"summary": "Increases 1 Charac by 1 (not above 5). Not twice the same characteristic"
	},
	{
		"id": 105,
		"talent": "DEFENSIVE",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Each rank of Defensive increases your character's Melee Defense and Ranged Defense by one.",
		"rate": ""
	},
	{
		"id": 106,
		"talent": "DEFENSIVE DRIVING",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Increase the Defense of any vehicle your character pilots by one per rank of Defensive Driving. The specifics of this talent require the optional vehicle rules, on page 220 in the GENESYS core rulebook. If your game does not use these rules, this talent adds <span data-dice='b' title='setback dice (black)'>b</span> per rank to combat checks targeting your character's vehicle or your character while piloting it.",
		"rate": ""
	},
	{
		"id": 107,
		"talent": "DEFENSIVE STANCE",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn, your character may suffer a number of Strain no greater than their ranks in Defensive Stance to use this talent. Then, until the end of your character's next turn, upgrade the difficulty of all Brawl and Melee combat checks targeting your character a number of times equal to the Strain suffered.",
		"rate": "Turn"
	},
	{
		"id": 108,
		"talent": "DEFENSIVE SYSOPS",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "When attempting to defend a computer system against intrusion (or when someone attempts to hack a computer owned or programmed by your character) your character adds <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> to their opponent's checks. If your character has access to the computer system when the intrusion takes place, they are automatically aware of the intrusion.",
		"rate": ""
	},
	{
		"id": 109,
		"talent": "DEFENSIVE SYSOPS (IMPROVED)",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Defensive Sysops talent to benefit from this talent. Before adding <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> from Defensive Sysops to a check, use this talent to add <span data-result='f' title='failure'>f</span> and <span data-result='t' title='threat'>t</span> to the results of the check instead.",
		"rate": "",
		"requiresId": 108,
		"requires": "DEFENSIVE SYSOPS"
	},
	{
		"id": 110,
		"talent": "DEFY DEATH",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "You fear nothing. Not the undead, not death, not the unknown, nothing. You are immune to fear effects, and you confer a <span data-dice='g' title='boost dice (blue)'>g</span> to fear checks to all allies within Short range.",
		"rate": ""
	},
	{
		"id": 111,
		"talent": "DESPERATE RECOVERY",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Before your character heals Strain at the end of an encounter, if their Strain is more than half of their Strain threshold, they heal two additional Strain.",
		"rate": "",
		"summary": "If current Strain is more than half of the threshold, heal 2 more Strain at the end of encounter"
	},
	{
		"id": 112,
		"talent": "DIRTY TRICKS",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "After your character inflicts a Critical Injury on an adversary, they may use this talent to upgrade the difficulty of that adversary's next skill check.",
		"rate": ""
	},
	{
		"id": 113,
		"talent": "DISARM",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "May spend <span data-result='x' title='triumph'>x</span> or <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> with a successful Brawl or Melee check to disarm an opponent.",
		"rate": ""
	},
	{
		"id": 114,
		"talent": "DISARMING SMILE",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Take the Disarming Smile action; succeed at an opposed Charm check against a target within Short range to lower all defenses of a target by ranks in Disarming Smile until the end of the encounter.",
		"rate": ""
	},
	{
		"id": 115,
		"talent": "DISCREDIT",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, take the Discredit Action, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Deception check to upgrade the difficulty of one character's social checks once, plus once for every <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span>, until the end of the encounter.",
		"rate": "Encounter"
	},
	{
		"id": 116,
		"talent": "DISORIENT",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "After hitting with combat check, may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to Disorient target for number of turnss equal to ranks in Disorient.",
		"rate": ""
	},
	{
		"id": 117,
		"talent": "DISTINCTIVE STYLE",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a Computers check to hack a system or break into a secured network, before rolling, your character may use this talent to add <span data-result='s' title='success'>s</span><span data-result='s' title='success'>s</span> and <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> to the results. If you are using the optional hacking rules on page 232 in the Genesys core rulebook and your check generates <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span>, your GM should spend it on the I Know You! option in Table I.2- 22 on page 234 in the GENESYS core rulebook.",
		"rate": "",
		"marked": false,
		"summary": "On Computers check to hack or break into, add <span data-result='s' title='success'>s</span><span data-result='s' title='success'>s</span> and <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> to the result"
	},
	{
		"id": 118,
		"talent": "DISTRACTING BEHAVIOR",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Make a Distracting Behavior Maneuver and suffer Strain no greater than ranks in Deception. Until the beginning of next turn, equal number of Engaged NPC's suffer <span data-result='t' title='threat'>t</span> on checks. Range increases with additional ranks.",
		"rate": ""
	},
	{
		"id": 119,
		"talent": "DISTRACTING BEHAVIOR (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Distracting Behavior talent to benefit from this talent. The Distracting Behavior Maneuver inflicts <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> on NPC's checks when NPC's target character's allies.",
		"rate": "",
		"requiresId": 118,
		"requires": "DISTRACTING BEHAVIOR"
	},
	{
		"id": 120,
		"talent": "DODGE",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "When your character is targeted by a Gunnery, Melee, Ranged [Heavy] or Ranged [Light] combat check, they may suffer a number of Strain no greater than their ranks in Dodge to use this talent. Then, upgrade the difficulty of the combat check targeting your character a number of times equal to the Strain suffered.",
		"rate": ""
	},
	{
		"id": 121,
		"talent": "DON'T SHOOT!",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session as an Action, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Charm check. On a success, cannot be target of combat checks until the end of the encounter or until making a combat check.",
		"rate": "Session",
		"marked": false,
		"summary": "With Hard Charm check, cannot be target of combat checks until the end of the encounter or until making a combat check"
	},
	{
		"id": 122,
		"talent": "DOUBLE OR NOTHING",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Suffer 2 Strain to perform the Double or Nothing Incidental to increase the difficulty of the next check by one. Then, after canceling opposing symbols, double the amount of remaining <span data-result='a' title='advantage'>a</span>.",
		"rate": ""
	},
	{
		"id": 123,
		"talent": "DOUBLE OR NOTHING (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Double or Nothing talent to benefit from this talent. When performing the Double or Nothing Incidental, after canceling opposing symbols, also double the amount of remaining <span data-result='s' title='success'>s</span>.",
		"rate": "",
		"requiresId": 122,
		"requires": "DOUBLE OR NOTHING"
	},
	{
		"id": 124,
		"talent": "DOUBLE OR NOTHING (SUPREME)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Double or Nothing (Improved) talent to benefit from this talent. When performing the Double or Nothing Incidental, also double the number of <span data-result='x' title='triumph'>x</span> and <span data-result='y' title='despair'>y</span>.",
		"rate": "",
		"requiresId": 123,
		"requires": "DOUBLE OR NOTHING (IMPROVED)"
	},
	{
		"id": 125,
		"talent": "DOUBLE-TALK",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> from a successful Charm or Deception check to Disorient a number of opponents within Short range equal to your character's Presence for the remainder of the turn and the next two turns.",
		"rate": ""
	},
	{
		"id": 126,
		"talent": "DREADFUL CARNAGE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Incapacitating or slaying an enemy demoralizes your other nearby foes. Whenever you cause an enemy to exceed his Wound threshold, you can make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check to stagger all enemies Short range as an Incidental. Enemies that cannot see both you and the enemy you incapacitated are unaffected.",
		"rate": ""
	},
	{
		"id": 127,
		"talent": "DUAL STRIKE",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When resolving a combined check to attack with two weapons in combat, your character may suffer 2 Strain to use this talent to hit with the secondary weapon (instead of spending <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span>).",
		"rate": ""
	},
	{
		"id": 128,
		"talent": "DUAL WIELDER",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Your character may use this talent to decrease the difficulty of the next combined combat check (see Two-Weapon Combat, on page 108 in the GENESYS core rulebook) they make during the same turn by one.",
		"rate": ""
	},
	{
		"id": 129,
		"talent": "DUELIST",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character adds <span data-dice='g' title='boost dice (blue)'>g</span> to his Brawl and Melee combat checks while Engaged with a single opponent. Your character adds <span data-dice='b' title='setback dice (black)'>b</span> to his Brawl or Melee combat checks while engaged with three or more opponents.",
		"rate": ""
	},
	{
		"id": 130,
		"talent": "DUMB LUCK",
		"tier": 5,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "You can survive situations that should kill you. When you roll a <span data-result='y' title='despair'>y</span> result on any skill check, you can spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> from the same skill check to change the <span data-result='y' title='despair'>y</span> result to a <span data-result='f' title='failure'>f</span> result. Using this talent is taxing on your system and costs you 3 Strain, and you can only use once a per session.",
		"rate": "Session"
	},
	{
		"id": 131,
		"talent": "DURABLE",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character reduces any Critical Injury result they suffer by 10 per rank of Durable, to a minimum of 01.",
		"rate": "",
		"summary": "Reduces any Critical Injury by 10 per rank (min 1)",
		"marked": false
	},
	{
		"id": 132,
		"talent": "DYNAMIC FIRE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a Ranged [Heavy] or Ranged [Light] attack while engaged with an opponent, may suffer 2 Strain to reduce the difficulty of the Ranged combat check by one, to a minimum of Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>).",
		"rate": ""
	},
	{
		"id": 133,
		"talent": "EAGLE EYES",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per encounter before making a ranged combat check, you may use this talent to increase your weapon's range by one range band (to a maximum of Extreme range). This lasts for the duration of the combat check.",
		"rate": "Encounter"
	},
	{
		"id": 134,
		"talent": "EASY PREY",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Your character may suffer 3 Strain to use this talent. Until the start of your character's next turn, your character and allies within short range add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> to combat checks against Immobilized targets.",
		"rate": ""
	},
	{
		"id": 135,
		"talent": "ENCODED COMMUNIQUE",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Upgrade the difficulty of checks to decrypt this character's coded messages without the proper cipher a number of times equal to Computers skill.",
		"rate": ""
	},
	{
		"id": 136,
		"talent": "ENCOURAGING WORDS",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "After an Engaged ally fails a check, may suffer 1 Strain to assist that ally's next check this encounter as an out-of-turn Incidental.",
		"rate": ""
	},
	{
		"id": 137,
		"talent": "ENDURING",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Each rank of Enduring increases your character's Soak value by one.",
		"rate": ""
	},
	{
		"id": 138,
		"talent": "ENERGY TRANSFER",
		"tier": 1,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "You may suffer 1 Strain to perform the Energy Transfer Maneuver; when you do, you can power up an appropriate unpowered device (such as a computer, a robot, or a door) until the end of the encounter. Alternatively, you can restore ammunition to an energy-based weapons, allowing a character to ignore an \"out of ammo\" <span data-result='y' title='despair'>y</span> result.",
		"rate": ""
	},
	{
		"id": 139,
		"talent": "ENFORCER",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You are skilled at causing fear in those you brutalize. Whenever you deal Strain damage with a Brawl or Melee combat check, you can make an Coercion check to demoralize your target as an Incidental. If you are successful, the target suffers <span data-dice='b' title='setback dice (black)'>b</span> to skill checks for a number of turns equal to <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> on the combat check, minimum of 1 turn.",
		"rate": ""
	},
	{
		"id": 140,
		"talent": "ENTOMOLOGIST",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Entomologist allows you to add <span data-dice='g' title='boost dice (blue)'>g</span> to all combat checks you make against every radroach, giant ant, bloatfly and radscorption.",
		"rate": ""
	},
	{
		"id": 141,
		"talent": "EVASION",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your speed, agility, and talent for intelligent fighting allow you to avoid your opponent's blows. You take careful stock of an opponent and slip away from his blow just as he commits to the attack. While in Guarded Stance, you can attempt to negate a single Brawl or Melee attack, as an Incidental. To do so, you must make a Brawl or Melee attack (depending on if you are unarmed or armed) attack roll and beat the attacker's result. A tie falls in favor of the attacker.",
		"rate": ""
	},
	{
		"id": 142,
		"talent": "EXPERT TRACKER",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Expert Tracker from your checks to find or follow tracks. Survival checks made to track targets take 50% less time than normal (this does not decrease with additional ranks of Expert Tracker).",
		"rate": ""
	},
	{
		"id": 143,
		"talent": "EXPLOIT",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When your character makes a combat check with a Melee weapon, they may suffer 2 Strain to use this talent to add the Ensnare quality to the attack. The rating of the Ensnare quality is equal to your character's ranks in Exploit.",
		"rate": ""
	},
	{
		"id": 144,
		"talent": "EXTRA AMMO",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Cannot run out of ammo due to a <span data-result='y' title='despair'>y</span> or <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> result. Items with Limited Ammo quality run out of ammo as normal.",
		"rate": ""
	},
	{
		"id": 145,
		"talent": "EYE FOR DETAIL",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "After making a Mechanics or Computers check, may suffer Strain up to ranks in Eye for Detail to convert that many <span data-result='s' title='success'>s</span> to <span data-result='a' title='advantage'>a</span>.",
		"rate": ""
	},
	{
		"id": 146,
		"talent": "FAMILIAR SKY",
		"tier": 1,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Once per session, may perform a Familiar Sky maneuver; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to reveal the current type of environment and other useful information.",
		"rate": "Session"
	},
	{
		"id": 147,
		"talent": "FAN THE HAMMER",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per encounter before making a combat check with a pistol (your GM has the final say on whether a weapon is a pistol or not), your character may use this talent to add the Auto-fire quality to the pistol when resolving the check. If your character does, the weapon runs out of ammo exactly as with an Out of Ammo result (see page 104 in the GENESYS core rulebook).",
		"rate": "Encounter"
	},
	{
		"id": 148,
		"talent": "FANCY PAINT JOB",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Upgrade all Charm, Deception, and Negotiation checks made in Engaged range of Signature Vehicle once.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 149,
		"talent": "FAST METABOLISM",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You recover faster than normal. You recover one additional Wound per day of natural rest per rank of Fast Metabolism.",
		"rate": ""
	},
	{
		"id": 150,
		"talent": "FEAR THE SHADOWS",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Deception check to force a single Minion group or Rival to flee the encounter.",
		"rate": "Session"
	},
	{
		"id": 151,
		"talent": "FEARSOME",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "When an non-nemesis adversary becomes Engaged with the character, the character may force the adversary to make a fear check, with the difficulty equal to the character's ranks in Fearsome.",
		"rate": ""
	},
	{
		"id": 152,
		"talent": "FEARSOME REPUTATION",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-result='a' title='advantage'>a</span> to results of Coercion checks equal to ranks in Fearsome Reputation.",
		"rate": ""
	},
	{
		"id": 153,
		"talent": "FEINT",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Spend <span data-result='x' title='triumph'>x</span> or <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> generated on a missed Brawl or Melee attack to upgrade difficulty of opponent's next attack targeting character by ranks in Feint.",
		"rate": ""
	},
	{
		"id": 154,
		"talent": "FERAL STRENGTH",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add +1 damage to Brawl and Melee combat checks per rank in Feral Strength.",
		"rate": ""
	},
	{
		"id": 155,
		"talent": "FEROCIOUS LOYALTY",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Animal Companion talent to benefit from this talent. Whenever you exceed half of your Wound threshold, your animal companion adds an automatic <span data-result='s' title='success'>s</span> and <span data-result='a' title='advantage'>a</span> to all combat checks.",
		"rate": "",
		"requiresId": 10,
		"requires": "ANIMAL COMPANION"
	},
	{
		"id": 156,
		"talent": "FIELD COMMANDER",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may use this talent to make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Leadership check. If successful, a number of allies equal to your character's Presence may immediately suffer 1 Strain to perform one Maneuver (out of turn). If there are any questions as to which allies take their Maneuvers first, your character is the final arbiter.",
		"rate": ""
	},
	{
		"id": 157,
		"talent": "FIELD COMMANDER (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Field Commander talent to benefit from this talent. When your character uses the Field Commander talent, your character affects a number of allies equal to twice the character's Presence. In addition, you may spend <span data-result='x' title='triumph'>x</span> to allow one ally to suffer 1 Strain to perform an Action, instead of a Maneuver.",
		"rate": "",
		"requiresId": 156,
		"requires": "FIELD COMMANDER"
	},
	{
		"id": 158,
		"talent": "FIGHTER'S STANCE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a combat check, if your character has performed the Guarded Stance Maneuver this turn, you may suffer 1 Strain to ignore the penalties of the Guarded Stance Maneuver.",
		"rate": ""
	},
	{
		"id": 159,
		"talent": "FINE TUNING",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "When reducing the amount of System Strain a vehicle suffers, reduce 1 additional System Strain per rank of Fine Tuning.",
		"rate": ""
	},
	{
		"id": 160,
		"talent": "FINISH HIM!",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You can take advantage of an enemy's debilitated state to attempt a coup de grace. You can deliver a coup de grace to staggering targets, and instantly put the target 1 Wound above its Wound threshold. Note that the GM may overrule the use of this talent on certain cruicial Nemesis characters vital to the plot.",
		"rate": ""
	},
	{
		"id": 161,
		"talent": "FIRE CONTROL",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Take the Fire Control Maneuver; all combat checks made from current vehicle count their target's Silhouette as one higher than normal until the beginning of next turn.",
		"rate": ""
	},
	{
		"id": 162,
		"talent": "FLASH OF INSIGHT",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "When your character generates <span data-result='x' title='triumph'>x</span> on a Knowledge skill check, roll <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> and add the results to the check, in addition to spending the <span data-result='x' title='triumph'>x</span> as usual.",
		"rate": ""
	},
	{
		"id": 163,
		"talent": "FLEET OF FOOT",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You are extraordinarily swift. Once per encounter, you are allowed to take a free Maneuver for moving. This free Maneuver does not count towards the number of Maneuvers you have or will take in the specific given turn. This benefit only applies if you are wearing no armor or light armor with Soak 1 or less, and not over-encumbered.",
		"rate": "Encounter"
	},
	{
		"id": 164,
		"talent": "FLICK OF THE WRIST",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "With a single motion, you can draw a light weapon and make a devastating attack. If you draw a onehanded weapon and make a combat check with it in the same turn, you can catch your opponent offguard, and you add <span data-result='s' title='success'>s</span> and <span data-result='a' title='advantage'>a</span> to your combat check against that one target. You may use this talent only once per turn and once per opponent during any single encounter. You can use this talent with the Quickdraw talent.",
		"rate": "Turn"
	},
	{
		"id": 165,
		"talent": "FLOWER CHILD",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You are no stranger to chems and drugs of all kinds, as such you decrease the difficult of any chem additions once whenever you use chems.",
		"rate": ""
	},
	{
		"id": 166,
		"talent": "FLURRY OF BLOWS",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Perform the Flurry of Blows Maneuver, suffering Strain up to your ranks in Coordination to gain the Linked quality with a rating equal to the amount of Strain suffered on your next Brawl or Melee combat check this turn.",
		"rate": ""
	},
	{
		"id": 167,
		"talent": "FORAGER",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character removes up to <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> from any skill checks they make to find food, water, or shelter. Checks to forage or search the area that your character makes take half the time they would normally.",
		"rate": ""
	},
	{
		"id": 168,
		"talent": "FORGOT TO COUNT?",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When an opponent makes a ranged combat check, you can spend <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> from that check to use this talent to cause their weapon to run out of ammo (see page 104 in the GENESYS core rulebook), as long as the weapon can normally run out of ammunition.",
		"rate": ""
	},
	{
		"id": 169,
		"talent": "FORMATION TACTICS",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Leadership check. If successful, choose a number of allies within Short range equal to generated. Upgrade the difficulty of attacks against these allies once until the end of your character's next turn.",
		"rate": ""
	},
	{
		"id": 170,
		"talent": "FORMATION TACTICS (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Formation Tactics talent to benefit from this talent. Reduce the difficulty of Formation Tactics to Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>). Spend <span data-result='x' title='triumph'>x</span> or <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to have the effect last until the end of the encounter.",
		"rate": "",
		"requiresId": 169,
		"requires": "FORMATION TACTICS"
	},
	{
		"id": 171,
		"talent": "FORTIFIED STRUCTURE",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Increase the hull trauma threshold of Signature Vehicle by 1 per rank of Fortified Structure.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 172,
		"talent": "FORTUNE FAVORS THE BOLD",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session as an Incidental, suffer 2 Strain to flip one GM Story Point to a Player Story Point.",
		"rate": "Session"
	},
	{
		"id": 173,
		"talent": "FORTUNE FINDER",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "You find 10% more bottle caps whenever your character would find bottle caps per rank of Fortune Finder, rounded up.",
		"rate": ""
	},
	{
		"id": 174,
		"talent": "FREERUNNING",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Suffer 1 Strain when making a move Maneuver to move to any location within Short range.",
		"rate": "",
		"marked": false
	},
	{
		"id": 175,
		"talent": "FREERUNNING (IMPROVED)",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Freerunning talent to benefit from this talent. Suffer 4 Strain when making a move Maneuver to move to any location within Medium range.",
		"rate": "",
		"requiresId": 174,
		"requires": "FREERUNNING"
	},
	{
		"id": 176,
		"talent": "FRENZIED ATTACK",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When making a Brawl or Melee combat check, suffer a number of Strain to upgrade the attack an equal number of times. The Strain suffered may not exceed ranks in Frenzied Attack.",
		"rate": ""
	},
	{
		"id": 177,
		"talent": "FRIEND OF THE NIGHT",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Your eyes adapt quickly to low-light conditions. Remove <span data-dice='b' title='setback dice (black)'>b</span> from environmental modifiers due to low-light conditions.",
		"rate": ""
	},
	{
		"id": 178,
		"talent": "FRIENDLY-FOE",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your knack for picking foe from friend in frantic ranged combat allows you to spend a Story Point to downgrade a <span data-result='y' title='despair'>y</span> to <span data-result='f' title='failure'>f</span> and thus avoid accidentally hitting your allies Engaged with your allies.",
		"rate": ""
	},
	{
		"id": 179,
		"talent": "FULL STOP",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "When piloting a vehicle, the character may take the Full Stop Maneuver to immediately reduce the speed of the vehicle to zero. The vehicle then suffers 1 point of System Strain for every point of speed it had before stopping.",
		"rate": ""
	},
	{
		"id": 180,
		"talent": "FULL THROTTLE",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "While driving or flying, your character may use this talent to make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Piloting or Driving check. If successful, the top speed of the vehicle increases by one (to a maximum of 5) for a number of rounds equal to your character's Cunning. The specifics of this talent require the optional vehicle rules, on page 220 in the GENESYS core rulebook. If your game does not use these rules, this talent simply makes the vehicle go much faster than normal, with the specifics up to your GM.",
		"rate": ""
	},
	{
		"id": 181,
		"talent": "FULL THROTTLE (IMPROVED)",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character must have purchased the Full Throttle talent to benefit from this talent. Suffer 1 Strain to attempt Full Throttle as a Maneuver and decrease its difficulty to Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>).",
		"rate": "",
		"requiresId": 180,
		"requires": "FULL THROTTLE"
	},
	{
		"id": 182,
		"talent": "FULL THROTTLE (SUPREME)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Full Throttle (Improved) talent to benefit from this talent. When performing Full Throttle, top speed increases by 2 instead of 1.",
		"rate": "",
		"requiresId": 181,
		"requires": "FULL THROTTLE (IMPROVED)"
	},
	{
		"id": 183,
		"talent": "GEARHEAD",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "The character removes <span data-dice='b' title='setback dice (black)'>b</span> per rank of Gearhead from his Mechanics checks. In addition, time to install attachments to armor or weapons takes 50% less time.",
		"rate": ""
	},
	{
		"id": 184,
		"talent": "GECKO STYLE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Pulling from the trickster habits of gecko, this style focuses on duping and incapacitating foes in the heat of combat. Your quick movement and trickery allow you to catch opponents off guard. While using this unarmed Brawl style, you can attempt to perform a dirty trick in place of an attack at the end of a charge. As part of a Maneuver that you use for movement, you can attempt an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check to impose a <span data-dice='b' title='setback dice (black)'>b</span> penalty on a single opponent. You are able to impose a second <span data-dice='b' title='setback dice (black)'>b</span> to the same opponent if you use a second Maneuver for moving as well, and must attempt a second Coercion check. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Lurk Style and Nightstalker Style, you can use an Incidental to adopt Lurk Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Nightstalker Style.",
		"rate": ""
	},
	{
		"id": 185,
		"talent": "GHASTLY SCAVENGER",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You can feast upon super mutants and feral ghouls in order to heal your Wounds. Eating such corpses has the effect of a single stimpak usage for you. Note that this counts against the daily stimpak usage.",
		"rate": ""
	},
	{
		"id": 186,
		"talent": "GHOST STEPS",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Your footsteps echo strangely and no longer betray your location. Thanks to your knowledge of acoustics you can, should you choose, cause the sound of your footsteps (as well as breathing and the rustle of gear) to issue forth from any direction and location within Short range. With a successful Stealth check, enemies are not aware of your true location and believe the Ghost Steps to be real. On a failed Stealth check, enemies are aware of your real location and hear your Ghost Steps for what they are, echoes. Ghost Steps does not work when underwater. For every rank you have of Ghost Steps, you can extend the range by one range band.",
		"rate": "",
		"marked": false,
		"summary": "Stealth check => cause the sound you make to issue from any direction and location within Short range (+1/rank)"
	},
	{
		"id": 187,
		"talent": "GO WITHOUT",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session, count as having the right tools for the job when performing the next skill check this turn.",
		"rate": "Session"
	},
	{
		"id": 188,
		"talent": "GOOD COP",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "May spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> from a Charm or Negotiation check to upgrade ability of a single ally's subsequent Social Interaction check against the target a number of times equal to ranks in Good Cop.",
		"rate": ""
	},
	{
		"id": 189,
		"talent": "GRAPPLE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character may suffer 2 Strain to use this talent. Until the start of your character's next turn, enemies must spent two maneuvers to disengage from your character.",
		"rate": ""
	},
	{
		"id": 190,
		"talent": "GREASED PALMS",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Before making a Social skill check, may spend up to 50 bottle caps of per rank of Greased Palms to upgrade the ability of the check once for every 50 spent.",
		"rate": ""
	},
	{
		"id": 191,
		"talent": "GRENADIER",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When your character makes a ranged combat check with a weapon that has the Blast item quality, you may spend one Story Point to use this talent to trigger the weapon's Blast quality, instead of spending <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> (even if the attack misses). In addition, your character treats grenades as having a range of Medium.",
		"rate": ""
	},
	{
		"id": 192,
		"talent": "GRIM REAPER'S SPIRIT",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Death becomes you! Whenever you kill or incapacitates an adversary – making the adversary exceed its Wounds or Strain threshold – you immediately recover 1 Strain per <span data-result='a' title='advantage'>a</span> generated on your combat check. Note that you don't have to spend your <span data-result='a' title='advantage'>a</span> on recovering these Strain, it just happens along with whatever you opt to spend your <span data-result='a' title='advantage'>a</span> on.",
		"rate": ""
	},
	{
		"id": 193,
		"talent": "GRIT",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Each rank of Grit increases your character's Strain threshold by one.",
		"rate": "",
		"marked": false
	},
	{
		"id": 194,
		"talent": "GUN NUT",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Guns, guns, guns, I'm looking for a good time! You are good with guns, and know how to fully optimize the potentiel of each and every singly type of gun. While using any type of ordinary firearm (slugthrower) that uses the Ranged [Heavy] or Ranged [Light] skill, you add <span data-dice='g' title='boost dice (blue)'>g</span> to your combat checks. However, your expertise with guns comes at a cost, as you add an automatic <span data-result='t' title='threat'>t</span> to all other combat checks made with weapons that are not guns.",
		"rate": ""
	},
	{
		"id": 195,
		"talent": "HAMSTRING SHOT",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per turn, your character may use this talent to perform a Ranged combat check against one nonvehicle target within range of the weapon used. If the check is successful, halve the damage inflicted by the attack (before reducing damage by the target's Soak). The target is Immobilized until the end of its next turn.",
		"rate": "Turn"
	},
	{
		"id": 196,
		"talent": "HARASS",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Animal Companion talent to benefit from this talent. Whenever the character's animal companion makes a successful combat check against a target, it may forgo inflicting damage to upgrade the difficulty of the target's next check once instead.",
		"rate": "",
		"requiresId": 10,
		"requires": "ANIMAL COMPANION"
	},
	{
		"id": 197,
		"talent": "HARD-BOILED",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "When recovering Strain after an encounter, may spend <span data-result='a' title='advantage'>a</span> up to ranks in Hard-Boiled to recover 1 Wound per <span data-result='a' title='advantage'>a</span> spent.",
		"rate": ""
	},
	{
		"id": 198,
		"talent": "HARD-HEADED",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "When Staggered or Disoriented, perform the Hard Headed Action; make a Daunting (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Discipline check to remove status. The difficulty is once reduced per rank of Hard-Headed.",
		"rate": ""
	},
	{
		"id": 199,
		"talent": "HEAVY HITTER",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session, spend on a successful Ranged [Heavy] or Gunnery check to add the Breach 1 quality to the attack, or increase an existing Breach rating by 1.",
		"rate": "Session"
	},
	{
		"id": 200,
		"talent": "HEIGHTENED AWARENESS",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Allies within Short range of your character add <span data-dice='g' title='boost dice (blue)'>g</span> to their Perception and Vigilance checks. Allies Engaged with your character add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> instead.",
		"rate": ""
	},
	{
		"id": 201,
		"talent": "HEROIC RECOVERY",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character acquires this talent, choose one characteristic. Once per encounter, you may spend one Story Point to use this talent to have your character heal Strain equal to the rating of the chosen characteristic.",
		"rate": "Encounter"
	},
	{
		"id": 202,
		"talent": "HEROIC RESILIENCE",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Immediately after being hit by an attack but before suffering damage, spend 1 Story Point to increase Soak by ranks in Heroic Resilience.",
		"rate": ""
	},
	{
		"id": 203,
		"talent": "HEROIC WILL",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When you purchase this talent for your character, choose two characteristics. You may spend a Story Point to use this talent to have your character ignore the effects of all Critical Injuries on any skill checks using those two characteristics until the end of the current encounter. (Your character still suffers the Critical Injuries; they just ignore the effects. See page 114 of the GENESYS core rulebook.)",
		"rate": ""
	},
	{
		"id": 204,
		"talent": "HIDDEN STORAGE",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Gain hidden storage in vehicles or equipment that holds items with total encumbrance equal to ranks in Hidden Storage.",
		"rate": ""
	},
	{
		"id": 205,
		"talent": "HINDERING SHOT",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Spend a story point and increase the difficulty of next Gunnery check by 1. If check deals damage, target vehicle suffers System Strain equal to speed when it moves for a number of turns equal to ranks in Hindering Shot.",
		"rate": ""
	},
	{
		"id": 206,
		"talent": "HIT THE DECK",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your extensive familiarity with explosives allows you to ignore a portion of their damage. You increase your Soak rating by 1 against all explosive weapons.",
		"rate": ""
	},
	{
		"id": 207,
		"talent": "HOLD TOGETHER",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Spend 1 Story Point to perform a Hold Together incidental immediately after vehicle takes damage to turn it into System Strain.",
		"rate": ""
	},
	{
		"id": 208,
		"talent": "HOW CONVENIENT!",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, your character may use this talent to make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Mechanics check. If successful, one device involved in the current encounter (subject to your GM's approval) spontaneously fails. This can be because of your character's actions, or it can simply be incredibly convenient timing!",
		"rate": "Session"
	},
	{
		"id": 209,
		"talent": "HUNTER",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Ranged [Heavy] and Survival are now career skills for your character.",
		"rate": ""
	},
	{
		"id": 210,
		"talent": "HUNTER'S QUARRY",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Take Hunter's Quarry Action, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Survival check to upgrade the ability of all attacks made against a target within Long range until the end of the character's next turn.",
		"rate": ""
	},
	{
		"id": 211,
		"talent": "HUNTER'S QUARRY (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Hunter's Quarry talent to benefit from this talent. Suffer 2 Strain to perform Hunter's Quarry Action as a Maneuver.",
		"rate": "",
		"requiresId": 210,
		"requires": "HUNTER'S QUARRY"
	},
	{
		"id": 212,
		"talent": "IMPALING STRIKE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character inflicts a Critical Injury with a Melee weapon, until the end of the target's next turn they may use this talent to Immobilize the target (in addition to the other effects of the Critical Injury).",
		"rate": ""
	},
	{
		"id": 213,
		"talent": "IMPROVED DEFENSES",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may attempt an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Survival check to fashion small defenses using scavenged materials. If the check is successful, the structure can provide cover for up to 4 characters for the rest of the encounter. Your character may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> from the check to increase the Ranged Defense the structure provides to 2.",
		"rate": ""
	},
	{
		"id": 214,
		"talent": "IN THE KNOW",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, make an opposed Deception vs Vigilance check with the difficulty downgraded a number of times equal to your ranks in Deception to have a target NPC believe specific false intelligence.",
		"rate": "Session"
	},
	{
		"id": 215,
		"talent": "INCITE REBELLION",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may take an Incite Rebellion Action; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check to cause a number of minions or rivals up to ranks in Coercion to become rebellious until the end of the encounter.",
		"rate": "Session"
	},
	{
		"id": 216,
		"talent": "INDOMITABLE",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per encounter, when your character would be incapacitated due to exceeding their Wound or Strain threshold, you may spend a Story Point to use this talent. Then, your character is not incapacitated until the end of their next turn. If your character reduces their Strain or Wounds to below their threshold before the end of their next turn, they are not incapacitated.",
		"rate": "Encounter"
	},
	{
		"id": 217,
		"talent": "INFORMANT",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session, may reveal a contact who can shed light on a chosen subject.",
		"rate": "Session"
	},
	{
		"id": 218,
		"talent": "INITIATE OF PAIN",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "The first time you take Wound damage in any combat, you gain a <span data-dice='g' title='boost dice (blue)'>g</span> bonus on combat checks, and Discipline checks against fear effects for 1 turn per rank of Initiate of Pain.",
		"rate": ""
	},
	{
		"id": 219,
		"talent": "INSPIRING LEADERSHIP",
		"tier": 5,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Leadership check. If successful, a number of allies not exceeding your character's Presence within Short range add <span data-result='s' title='success'>s</span> to their next skill check.",
		"rate": ""
	},
	{
		"id": 220,
		"talent": "INSPIRING RHETORIC",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may use this talent to make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Leadership check. For each <span data-result='s' title='success'>s</span> the check generates, one ally within Short range heals one Strain. For each <span data-result='a' title='advantage'>a</span>, one ally benefiting from Inspiring Rhetoric heals one additional Strain.",
		"rate": ""
	},
	{
		"id": 221,
		"talent": "INSPIRING RHETORIC (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Inspiring Rhetoric talent to benefit from this talent. Allies affected by your character's Inspiring Rhetoric add <span data-dice='g' title='boost dice (blue)'>g</span> to all skill checks they make for a number of turns equal to your character's ranks in Leadership.",
		"rate": "",
		"requiresId": 220,
		"requires": "INSPIRING RHETORIC"
	},
	{
		"id": 222,
		"talent": "INSPIRING RHETORIC (SUPREME)",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Inspiring Rhetoric (Improved) talent to benefit from this talent. Your character may choose to suffer 1 Strain to use the Inspiring Rhetoric talent as a Maneuver, instead of as an Action.",
		"rate": "",
		"requiresId": 221,
		"requires": "INSPIRING RHETORIC (IMPROVED)"
	},
	{
		"id": 223,
		"talent": "INTENSE FOCUS",
		"tier": 5,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Before making a skill check, may perform the Intense Focus maneuver. Suffer 1 Strain and upgrade the ability of the skill check once.",
		"rate": ""
	},
	{
		"id": 224,
		"talent": "INTERJECTION",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "After another character makes a Social skill check, suffer 3 Strain to take an Interjection Incidental make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Vigilance check to add <span data-result='s' title='success'>s</span> or <span data-result='f' title='failure'>f</span> equal to <span data-result='s' title='success'>s</span>, and <span data-result='a' title='advantage'>a</span> or <span data-result='t' title='threat'>t</span> equal to <span data-result='a' title='advantage'>a</span> to the check.",
		"rate": ""
	},
	{
		"id": 225,
		"talent": "INTIMIDATING",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "May suffer a number of Strain to downgrade difficulty of Coercion checks, or upgrade difficulty when targeted by Coercion checks, by an equal number. Strain suffered this way cannot exceed ranks in Intimidating.",
		"rate": ""
	},
	{
		"id": 226,
		"talent": "INVENTOR",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When your character makes a check to construct new items or modify existing ones, use this talent to add a number of <span data-dice='g' title='boost dice (blue)'>g</span> to the check equal to ranks of Inventor. In addition, your character may attempt to reconstruct devices that they have heard described but have not seen and do not have any kinds of plans or schematics for.",
		"rate": ""
	},
	{
		"id": 227,
		"talent": "IRON BODY",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Iron Body from Coordination and Resilience checks. Reduce the critical rating of Brawl attacks by 1 per rank of Iron Body (to a minimum of 1).",
		"rate": ""
	},
	{
		"id": 228,
		"talent": "IRON SOUL",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "If you are carrying items that total 2 Encumbrance or less (after factoring in reductions such as for armor being worn), at the end of the encounter you heal all Strain that you are currently suffering. If a character normally carries items that total more than 2 Encumbrance but discards or otherwise loses those items temporarily, the GM can rule that the character still does not gain the benefits of Iron Soul.",
		"rate": ""
	},
	{
		"id": 229,
		"talent": "IT'S NOT THAT BAD",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session when an ally would suffer a Critical Injury, may take an It's Not That Bad action; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Medicine check to stop the ally from gaining the Critical Injury when you are within Engaged range.",
		"rate": "Session"
	},
	{
		"id": 230,
		"talent": "JUMP UP",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per turn during your character's turn, your character may use this talent to stand from a prone or seated position as an Incidental.",
		"rate": "Turn"
	},
	{
		"id": 231,
		"talent": "JURY RIGGED",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "The character chooses one personal weapon or piece of armor per rank of Jury Rigged. He may increase the damage of the weapon by one; decrease the <span data-result='a' title='advantage'>a</span> cost on its Critical, or any single other effect by one to a minimum of one; or increase armor's Ranged or Melee Defense by one. Alternatively, he can decrease the Encumbrance of the item by two to a minimum of one. The bonus only applies so long as the character is using the item. If the item is ever lost or destroyed, the character may apply Jury Rigged to a new personal weapon or piece or armor.",
		"rate": ""
	},
	{
		"id": 232,
		"talent": "JUST KIDDING!",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per turn as an incidental spend 1 Story Point to ignore <span data-result='y' title='despair'>y</span> generated on a Social skill check by the character or any ally in Short range.",
		"rate": "Turn"
	},
	{
		"id": 233,
		"talent": "KILL WITH KINDNESS",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Kill with Kindness from your Charm and Leadership checks.",
		"rate": ""
	},
	{
		"id": 234,
		"talent": "KNACK FOR IT",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When you purchase this talent for your character, select one skill. Your character removes <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> from any checks they make using this skill. Each additional time you purchase this talent for your character, select two additional skills. Your character also removes <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> from any checks they make using these skills. You cannot select combat skills when choosing skills for this talent.",
		"rate": ""
	},
	{
		"id": 235,
		"talent": "KNOCKDOWN",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "After hitting with a Brawl or Melee attack, may spend a <span data-result='x' title='triumph'>x</span> to knock the target prone.",
		"rate": ""
	},
	{
		"id": 236,
		"talent": "KNOW SOMEBODY",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Once per session, when attempting to purchase a legally available item, your character may use this talent to reduce its rarity by one per rank of Know Somebody.",
		"rate": "Session"
	},
	{
		"id": 237,
		"talent": "KNOW THE ENEMY",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "May use a Knowledge skill check, instead of Cool or Vigilance, when making checks to determine Initiative.",
		"rate": ""
	},
	{
		"id": 238,
		"talent": "KNOW-IT-ALL",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session, perfectly recall an important fact previously learned as if a Story Point had been spent.",
		"rate": "Session"
	},
	{
		"id": 239,
		"talent": "KNOWLEDGE SPECIALIZATION",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When making a Knowledge skill check, may spend a <span data-result='x' title='triumph'>x</span> result to gain additional <span data-result='s' title='success'>s</span> equal to ranks in Knowledge Specialization.",
		"rate": ""
	},
	{
		"id": 240,
		"talent": "KNOW THE ROPES",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> to checks made to escape from restraints equal to ranks in Skullduggery. Spend <span data-result='x' title='triumph'>x</span> to free all other allies within Short range.",
		"rate": ""
	},
	{
		"id": 241,
		"talent": "KNOWN SCHEMATIC",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Once per session, may perform the Known Schematic Maneuver; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check. Success grants familiarity with a building, vessel or vehicle's design.",
		"rate": "Session"
	},
	{
		"id": 242,
		"talent": "LARGER PROJECT",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Signature Vehicle can have a Silhouette 1 larger per rank of Larger Project.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 243,
		"talent": "LEAD BELLY",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Your digestive tract has adjusted to the weirdness of the wasteland! Gain <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Lead Belly to resist the effects of radiation from eating or drinking.",
		"rate": ""
	},
	{
		"id": 244,
		"talent": "LET'S RIDE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per round during your character's turn, your character can use this talent to mount or dismount from a vehicle or animal, or move from one position in a vehicle to another (such as from the cockpit to a gun turret) as an Incidental. In addition, if your character suffers a Short-range fall (see page 112 in the GENESYS core rulebook) from a vehicle or animal, they suffer no damage and land on their feet.",
		"rate": ""
	},
	{
		"id": 245,
		"talent": "LET'S TALK THIS OVER",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per game session, when a combat encounter against one or more sentient beings is about to begin, the character make a Daunting (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Charm check. If successful, the combat encounter instead becomes a Social encounter, with the PCs attempting to convince their opposition to back down, come around to their viewpoint, or accept a compromise. The GM is the final arbiter of how the situation resolves without violence (or how the combat encounter continues if the character's check is unsuccessful).",
		"rate": "Session"
	},
	{
		"id": 246,
		"talent": "LETHAL BLOWS",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Add +10 per rank of Lethal Blows to any Critical Injury results inflicted on opponents.",
		"rate": ""
	},
	{
		"id": 247,
		"talent": "LIFE OR DEATH",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "When your character suffers Wounds equal to half of their Wound threshold or greater, add <span data-dice='g' title='boost dice (blue)'>g</span> to all combat checks they make.",
		"rate": ""
	},
	{
		"id": 248,
		"talent": "LIFE OR DEATH (IMPROVED)",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Life or Death talent to benefit from this talent. When your character suffers Wounds equal to half of their Wound threshold or greater, upgrade the ability of all combat checks they make once. This replaces the normal effects of Life or Death.",
		"rate": "",
		"requiresId": 247,
		"requires": "LIFE OR DEATH"
	},
	{
		"id": 249,
		"talent": "LIFE OR DEATH (SUPREME)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Life or Death (Improved) talent to benefit from this talent. The effects of Life or Death activate when your character takes Wounds equal to one quarter of their Wound threshold, instead of half.",
		"rate": "",
		"requiresId": 248,
		"requires": "LIFE OR DEATH (IMPROVED)"
	},
	{
		"id": 250,
		"talent": "LIGHT STEP",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You are incredibly light on your feet and make very little noise in comparison to others. With the Light Feet talent you cannot risk accidentally setting off or triggering floor traps or mines, regardless of knowing there are there or not.",
		"rate": ""
	},
	{
		"id": 251,
		"talent": "LISTEN TO THIS",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "You can perfectly repeat to others what you hear. Whenever you make a successful Perception check to hear a noise, you can describe that sound any time up to 1 hour later with such clarity that any individuals hearing the description are treated as if they had heard the sound themselves. For every rank of Listen to This beyond the first, you can extend the duration with another hour. This trick is particularly useful if you overhear a conversation but don't understand the language spoken, since it allows you to repeat it verbatim to an ally who might be able to translate.",
		"rate": ""
	},
	{
		"id": 252,
		"talent": "LONE WANDERER",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Who needs friends anyway? When you are by yourself all attacks against you suffer <span data-dice='b' title='setback dice (black)'>b</span> and you can carry additional Encumbrance equal to half your Brawn rating (rounded down).",
		"rate": ""
	},
	{
		"id": 253,
		"talent": "LONG HAUL",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Being over-encumbered is no longer a hindrance to you. For every rank of Long Haul you can remove one <span data-dice='b' title='setback dice (black)'>b</span> from all Agility- and Brawn-based checks imposed from being over-encumbered, as per rules detailed on page 85 in the GENESYS core rulebook.",
		"rate": ""
	},
	{
		"id": 254,
		"talent": "LOOM",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "When an ally Engaged with the character makes a successful Charm, Deception, or Negotiation check, the character adds <span data-result='a' title='advantage'>a</span> per rank in Coercion to the ally's check.",
		"rate": ""
	},
	{
		"id": 255,
		"talent": "LUCKY START",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Sometimes your luck overcomes a slow natural reaction. At the expenditure of 3 Strain, you can reroll your Initiative check (Cool or Vigilance according to the situation and dictated by the GM). You must keep the result of the re-rolled Initiative check.",
		"rate": ""
	},
	{
		"id": 256,
		"talent": "LUCKY STRIKE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character purchases this talent, choose one characteristic. After your character makes a successful combat check, you may spend one Story Point to use this talent to add damage equal to your character's ranks in that characteristic to one hit of the combat check.",
		"rate": ""
	},
	{
		"id": 257,
		"talent": "LURK STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "The school of the lurk employs critical observations as weapons against opponents. Practitioners catalogue a foe's weaknesses and seek the perfect moment to strike, ensuring that no movement or effort is ever wasted. While using this unarmed Brawl style, you can spend an Incidental to make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to identify a single creature. If you succeed at the check, while using this style, you add a <span data-dice='b' title='setback dice (black)'>b</span> to all combat checks the creature makes against you. These bonuses last for as long as you use this style. If you cease combat with the creature during this time and resume it later, you can attempt the check again. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Radscorpion Style and Deathclaw Style, you can use an Incidental to adopt Deathclaw Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Radscorpion Style.",
		"rate": ""
	},
	{
		"id": 258,
		"talent": "MACHINE BENDER",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When you make a Mechanics check to help a character heal Wounds, the target heals one additional Wound per rank of Machine Bender. (Typically, only robots can be healed with Mechanics checks.)",
		"rate": ""
	},
	{
		"id": 259,
		"talent": "MAD INVENTOR",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, your character may use this talent to make a Mechanics check to attempt to cobble together the functional equivalent of any item using spare parts or salvage. The difficulty of the check is based on the item's rarity; see the table below. Your GM will modify the check based on the circumstances and might decide that some items simply can't be created with what's available (if you are being held in a prison cell, for instance). Your GM may spend <span data-result='y' title='despair'>y</span> on the check to indicate the item ends up being dangerous to the user and anyone around them in some way. For instance, a pistol might explode instead of running out of ammo, or a breathing mask might make the user light-headed. MAD INVENTOR RARITY DIFFICULT 0-2 Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>) 3-4 Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) 5-6 Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) 7 Daunting (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) 8 Formidable (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) 9+ Impossible",
		"rate": "Session"
	},
	{
		"id": 260,
		"talent": "MANTIS STYLE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Based on the hunting techniques of the praying mantis, practitioners of this unarmed Brawl style fight with their hands turned down to emulate the insect's sharp grasping forelimbs. Mantis style uses precise, accurate strikes to pinpoint an opponent's vital areas, such as eyes, throat, and pressure points. While using this style, you gain reduce the Critical Rating of your unarmed Brawl attacks. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Stingwing Style and Ant Style, you can use an Incidental to adopt Stingwing Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Ant Style.",
		"rate": ""
	},
	{
		"id": 261,
		"talent": "MASTER",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When you purchase this talent for your character, choose one skill. Once per turn, your character may suffer 2 Strain to use this talent to reduce the difficulty of the next check they make using that skill by two, to a minimum of Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>).",
		"rate": "Turn"
	},
	{
		"id": 262,
		"talent": "MASTER DEMOLOTIONIST",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When resolving an attack from a personal scale explosive or ordinance weapon, your character may spend <span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> to have the weapon's Blast quality affect all characters within Short range (rather than Engaged). If the weapon normally affects all characters within Short range, then the range of the effect is increased to Medium range instead.",
		"rate": ""
	},
	{
		"id": 263,
		"talent": "MASTER DRIVER",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Once per turn when driving, piloting, or operating a vehicle, may suffer 2 Strain to perform any vehicle Action as a Maneuver.",
		"rate": "Turn"
	},
	{
		"id": 264,
		"talent": "MASTER GRENADIER",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Decrease the <span data-result='a' title='advantage'>a</span> cost to activate the Blast quality on any attack by 1 to a minimum of 1.",
		"rate": ""
	},
	{
		"id": 265,
		"talent": "MASTER INSTRUCTOR",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per turn, suffer 2 Strain to allow an ally within Short range to count as having the same number of ranks in Discipline as your character for the next Discipline check the ally makes.",
		"rate": "Turn"
	},
	{
		"id": 266,
		"talent": "MASTER MERCHANT",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When buying or selling goods, may suffer 2 Strain to sell for 25% more or buy for 25% less.",
		"rate": ""
	},
	{
		"id": 267,
		"talent": "MELTDOWN",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When a target exceeds its Wound threshold by an energy weapon, this talent will trigger an explosion centered on the target, similar to a plasma grenade explosion, but smaller. The explosion can cause Critical Injuries, potentially killing nearby targets and propagating further meltdowns.",
		"rate": ""
	},
	{
		"id": 268,
		"talent": "MIND OVER BODY",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your body heals faster than most others, and you are allowed to attempt to heal two Critical Injuries per week, instead of one as per normal healing rules.",
		"rate": ""
	},
	{
		"id": 269,
		"talent": "MIND OVER MATTER",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You may spend 1 Story Point to recover Strain equal to your Willpower rating.",
		"rate": ""
	},
	{
		"id": 270,
		"talent": "MOLE RAT STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "This unarmed Brawl style, originating humbly from the folk traditions of disparate peoples, represents several similar unarmed fighting arts practiced around the world. Regardless of variations in technique, all practitioners have a fluid fighting stance that emphasizes rapid, powerful kicks. The style's constant motion and graceful footwork lead many to mistakenly view practitioners as highly skilled dancers, a misconception that has allowed the technique to be taught in secret, the hidden weapon of the downtrodden and the oppressed. Openly martial versions of this style lose some of the dance-like qualities but retain the style's extraordinary kicking techniques and agility. While using this style, attacks against you take a <span data-dice='b' title='setback dice (black)'>b</span> penalty. Further, you add a <span data-dice='g' title='boost dice (blue)'>g</span> against opponents that are yet to act in this encounter. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Radroach Style and Deathclaw Style, you can use an Incidental to adopt Radroach Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Deathclaw Style.",
		"rate": ""
	},
	{
		"id": 271,
		"talent": "MOST IMPRESSIVE",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Spend <span data-result='x' title='triumph'>x</span> from any skill check to allow a number of allies not exceeding your character's Presence within Short range add <span data-result='a' title='advantage'>a</span> to their next check.",
		"rate": ""
	},
	{
		"id": 272,
		"talent": "MOVING TARGET",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "If the character has already acted this turn, increase Ranged Defense by 1 per rank of Moving Target.",
		"rate": ""
	},
	{
		"id": 273,
		"talent": "MULTIPLE FOES",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character adds <span data-dice='g' title='boost dice (blue)'>g</span> to his Brawl and Melee combat checks when engaged with multiple opponents. This includes single groups of multiple minions.",
		"rate": ""
	},
	{
		"id": 274,
		"talent": "MUSEUM WORTHY",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, take Museum Worthy Action, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to ascertain information regarding a relic, ruin, or piece of history.",
		"rate": "Session"
	},
	{
		"id": 275,
		"talent": "MYSTERIOUS STRANGER",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "You have a guardian angel, but with a deadly handcannon instead of wings. Meet the Mysterious Stranger. An odd and eldritch entity said to appear and aid you in combat before you draw your dying breath. Of course, it helps if you have said a prayer to the Mysterious Stranger first. Once per session, by spending a Story Point, the Mysterious Stranger can make an appearance and help you in a hostile situation. The Mysterious Stranger will show up on Medium range, wearing a long leather duster and a fedora, carrying a weapon of sorts. If your character is male, the Mysterious Stranger is also a male, while a female character has a female Mysterious Stranger guardian angel. The Mysterious Stranger has the exact same skill ranks, talents, Wound and Strain threshold as the character, and is carrying the same weapon (if the character is wielding a Brawl or Melee weapon, equip the Mysterious Stranger with a slugthrower). The Mysterious Stranger takes his (or her) turn immediately after the character, shooting at the same target (or another target as specified by the character if the original target has been incapacitated). The Mysterious Stranger is always at Medium range of the character and all of his allies trying to interact with the guardian angel, though adversaries may battle and close in on the Mysterious Stranger normally. Once the hostile situation and encounter is finished, the Mysterious Stranger makes a quick escape and is nowhere to be found.",
		"rate": "Session"
	},
	{
		"id": 276,
		"talent": "NATURAL",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character purchases this talent, choose two skills. Once per session, your character may use this talent to reroll one skill check that uses one of those two skills.",
		"rate": "Session"
	},
	{
		"id": 277,
		"talent": "NERD RAGE",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Whenever your Wound threshold drop to 20% or below, you gain +1 to your Brawn characteristic. This stacks with other talents and applies to Soak.",
		"rate": ""
	},
	{
		"id": 278,
		"talent": "NEVER OUTNUMBERED",
		"tier": 1,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "You can demoralize multiple enemies. You can perform the Never Outnumbered Maneuver and attempt a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check to demoralize all opponents within Short range whom can see you. If you succeed, all opponents add an automatic <span data-result='t' title='threat'>t</span> to all skill checks until the end of their next turn. For every rank of Never Outnumbered you extend the duration by one additional turn.",
		"rate": ""
	},
	{
		"id": 279,
		"talent": "NIGHT PERSON",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You are a creature of the night! Gain <span data-dice='g' title='boost dice (blue)'>g</span> to Perception per rank of Night Person between the hours of 6:00 p.m. and 6:00 a.m. If your character has the Night Person talent he cannot have the Solar Powered talent.",
		"rate": ""
	},
	{
		"id": 280,
		"talent": "NIGHTSTALKER STYLE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Students of the nightstalker throw caution to the wind as they weave recklessly among their foes. Those who master the style turn their unrivaled mobility into a weapon, striking their enemies with a series of swift retaliatory strikes. While using this unarmed Brawl style, opponents in Engaged ranged of you that attack you with a Ranged combat check must upgrade the difficulty of their combat check one additional time because of your style. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Coyote Style and Lurk Style, you can use an Incidental to adopt Lurk Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Coyote Style.",
		"rate": ""
	},
	{
		"id": 281,
		"talent": "NOBODY'S FOOL",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "May upgrade difficulty of incoming Charm, Coercion, or Deception checks once per rank of Nobody's Fool.",
		"rate": ""
	},
	{
		"id": 282,
		"talent": "NOT TODAY",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Once per session, spend a Story Point to save Signature Vehicle from destruction.",
		"rate": "Session",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 283,
		"talent": "NOW THE MASTER",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per session, you may choose any one character in the current encounter and one talent that the target character possesses. For the remainder of the encounter, you count as having that talent. If you select a ranked talent, you count as having ranks in that talent equal to the number of ranks in that talent that the target possesses.",
		"rate": "Session"
	},
	{
		"id": 284,
		"talent": "NUCLEAR PHYSICIST",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "You've learned to split the atom... and command it. All weapons that have the Rad quality now deal 1 point of additional additional damage per rank of Nuclear Physicist.",
		"rate": ""
	},
	{
		"id": 285,
		"talent": "OFFENSIVE DRIVING",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "As a Maneuver, suffer System Strain up to vehicle's highest Defense to upgrade the difficulty of target's next Driving check that many times.",
		"rate": ""
	},
	{
		"id": 286,
		"talent": "ONE WITH NATURE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When in the wilderness, your character may make a Simple (–) Survival check, instead of Discipline or Cool, to recover Strain at the end of an encounter (see page 117 of the GENESYS core rulebook).",
		"rate": ""
	},
	{
		"id": 287,
		"talent": "ONE WITH THE SHADOWS",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You are adept at fighting in darkness. Whenever you begin combat within an area of darkness or shadowy illumination, you gain a <span data-dice='g' title='boost dice (blue)'>g</span> on your Initiative check. When in shadowy illumination or lowlight conditions, all attacks against you have a <span data-dice='b' title='setback dice (black)'>b</span> on all combat checks.",
		"rate": ""
	},
	{
		"id": 288,
		"talent": "OPENING TAP",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "\"No time to waste on tools – a sharp tap should pop that lock!\" As an Action, you can make a Skulduggery check with an upgraded twice difficulty (which is determined by the lock) by tapping a lock with a hard, blunt object such as the pommel of a weapon. You don't take any additional penalty for making the check without tools. You can use this trick any number of times per day until you fail an Skulduggery check made in this way. After a failure, you can't use Opening Tap again until after you have rested for 8 hours.",
		"rate": ""
	},
	{
		"id": 289,
		"talent": "OPPORTUNIST",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When your character purchases this talent, choose one non-combat skill. When you roll a check using this skill, you may suffer Strain up to ranks in Opportunist to convert that many <span data-result='s' title='success'>s</span> into <span data-result='a' title='advantage'>a</span>.",
		"rate": ""
	},
	{
		"id": 290,
		"talent": "OUTDOORSMAN",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Outdoorsman from your checks to move through terrain or to manage terrain or environmental effects. Decrease overland travel times by 50% (this does not decrease with additional ranks of Outdoorsman).",
		"rate": ""
	},
	{
		"id": 291,
		"talent": "OUTSIDE THE BOX",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Choose one characteristic when purchasing this talent. Once per session, make one skill check using that characteristic rather than the characteristic linked to that skill.",
		"rate": "Session"
	},
	{
		"id": 292,
		"talent": "OVERBALANCE",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Whenever an enemy Engaged with the character makes a combat check, after the attack is resolved, the character may spend <span data-result='y' title='despair'>y</span> or <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> to Stagger the attacker until the end of the attacker's next turn.",
		"rate": ""
	},
	{
		"id": 293,
		"talent": "OVERSTOCKED AMMO",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Increase the value of the Limited Ammo quality of any weapons mounted on Signature Vehicle by 1 per rank of Overstocked Ammo.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 294,
		"talent": "OVERWHELM DEFENSES",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Upon unsuccessful attack with a vehicle weapon, may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> per rank of Overwhelm Defenses. Reduce the defense in the targeted zone by 1 for every <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> spent.",
		"rate": ""
	},
	{
		"id": 295,
		"talent": "PACK INITIATIVE",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "You can coordinate your Initiative with your allies. If you and an ally both have the Pack Initiative talent, you add an automatic <span data-result='s' title='success'>s</span> to your Initiative check (applying to both Cool or Vigilance checks for Initiative) per ally that has the Pack Initiative talent, not including yourself.",
		"rate": ""
	},
	{
		"id": 296,
		"talent": "PACK RAT",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "You are efficient at arranging your inventory in general. This makes it much easier to carry that little extra you've always needed. This is useful for characters with low Brawn. Any items that have an Encumbrance of 2 or less now weighs half their normal weight for you.",
		"rate": ""
	},
	{
		"id": 297,
		"talent": "PAIN TRAIN",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Choo Choo! All aboard! While wearing Power Armor, sprinting into enemies hurts and staggers them. This requires you to make a Maneuver to run into the enemy and succeed at a Brawl attack against the opponent (does not count as an Action). The opponent is suffers normal damage as per brawling rules and is Staggered until the end of his next turn if you have <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> on your Brawl check.",
		"rate": ""
	},
	{
		"id": 298,
		"talent": "PAINFUL BLOW",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character makes a combat check, you may voluntarily increase the difficulty by one to use this talent. If the target suffers one or more Wounds from the combat check, the target suffers 2 Strain each time they perform a Maneuver until the end of the encounter.",
		"rate": ""
	},
	{
		"id": 299,
		"talent": "PARRY",
		"tier": 1,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "When your character suffers a hit from a Brawl or Melee combat check, after damage is calculated but before Soak is applied (so immediately after Step 3 of Perform a Combat check, page 102 of the GENESYS core rulebook), your character may suffer 3 Strain to use this talent to reduce the damage of the hit by two plus their ranks in Parry. This talent can only be used once per hit, and your character needs to be wielding a Melee weapon.",
		"rate": ""
	},
	{
		"id": 300,
		"talent": "PARRY (IMPROVED)",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Parry talent to benefit from this talent. When your character suffers a hit from a Brawl or Melee combat check and uses Parry to reduce the damage from that hit, after the attack is resolved, you may spend <span data-result='y' title='despair'>y</span> or <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> from the attacker's check to use this talent. Then, your character automatically hits the attacker once with a Brawl or Melee weapon your character is wielding. The hit deals the weapon's base damage, plus any damage from applicable talents or abilities. Your character can't use this talent if the original attack incapacitates him.",
		"rate": "",
		"requiresId": 299,
		"requires": "PARRY"
	},
	{
		"id": 301,
		"talent": "PARTY ANIMAL",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You are such a Party Animal that you no longer suffer the withdrawal effect from alcohol addiction. While intoxicated you add <span data-dice='g' title='boost dice (blue)'>g</span> to all your skill checks.",
		"rate": ""
	},
	{
		"id": 302,
		"talent": "PERSISTENT ATTACKER",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Once you find a target's weak point, you can easily strike it again. If your attack successfully hits your intended target, you can spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> from your attack to increase your next attack against the same target, as long as the attack is within the following turn. You can upgrade the next combat check once per rank of Persistent Attacker.",
		"rate": ""
	},
	{
		"id": 303,
		"talent": "PHYSICAL TRAINING",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Physical Training to Athletics and Resilience skill checks.",
		"rate": ""
	},
	{
		"id": 304,
		"talent": "PHYSICIAN",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When making a Medicine check to help a character heal Wounds, the target heals 1 additional Strain per rank of Physician.",
		"rate": ""
	},
	{
		"id": 305,
		"talent": "PIN",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Take Pin Action; make an opposed Athletics check to Immobilize an Engaged opponent until the end of the character's next turn. Spend <span data-result='x' title='triumph'>x</span> to extend duration one turn.",
		"rate": ""
	},
	{
		"id": 306,
		"talent": "PINNING FIRE",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Select a target within range of your currently wielded ranged weapon and make a Pinning Fire Action. Until the start of your next turn, the targeted character adds <span data-dice='b' title='setback dice (black)'>b</span> to their checks for each rank of Pinning Fire, and suffers 1 Strain.",
		"rate": ""
	},
	{
		"id": 307,
		"talent": "PINNING FIRE (IMPROVED)",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character must have the Pinning Fire talent to benefit from this talent. When making a Pinning Fire Action, you may affect a number of targets equal to ranks of Pinning Fire.",
		"rate": ""
	},
	{
		"id": 308,
		"talent": "PLASMA SPAZ",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Plasma weapons is your weapon of choice. And your specialization with them certainly bear fruit. When you are using plasma weapons, you increase the damage dealt by one point, and you also increase the range of the weapon by one range band.",
		"rate": ""
	},
	{
		"id": 309,
		"talent": "PLAUSIBLE DENIABILITY",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Plausible Deniability from your Coercion and Deception checks.",
		"rate": ""
	},
	{
		"id": 310,
		"talent": "PLAUSIBLE DENIABILITY (IMPROVED)",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character must have purchased the Plausible Deniability talent to benefit from this talent. Take a Plausible Deniability Action makes a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check to convince one bystander equal to your Willpower to depart quietly.",
		"rate": "",
		"requiresId": 309,
		"requires": "PLAUSIBLE DENIABILITY"
	},
	{
		"id": 311,
		"talent": "POINT BLANK",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Add 1 damage per rank of Point Blank to damage of one hit of successful attack while using Ranged [Heavy] or Ranged [Light] skills at Short range or Engaged.",
		"rate": ""
	},
	{
		"id": 312,
		"talent": "POINT BLANK SHOT",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "You are adept at firing against opponents at Engaged range. Ignore one difficulty increase to your ranged combat check when Engaged with opponents per rank of Point Blank Shot.",
		"rate": ""
	},
	{
		"id": 313,
		"talent": "POWERFUL BLAST",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Increase damage dealt by Blast quality by +1 per rank of Powerful Blast.",
		"rate": ""
	},
	{
		"id": 314,
		"talent": "PRECISE AIM",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn, may perform Precise Aim Maneuver. Suffer a number of Strain no greater than ranks in Precise Aim, then reduce target's Melee and Ranged Defense by that number.",
		"rate": "Turn"
	},
	{
		"id": 315,
		"talent": "PRECISION STRIKE",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When you inflict a Critical Injury with a Brawl or Melee attack, you may suffer 1 Strain to change the result to any Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>) Critical Injury result. Additionally, whenever you defeat a minion or rival NPC, you may always choose to do so by nonlethal means, even if the environment or exceptional circumstances would normally make that very difficult or impossible.",
		"rate": ""
	},
	{
		"id": 316,
		"talent": "PRECISION STRIKE (IMPROVED)",
		"tier": 4,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Precision Strike talent to benefit from this talent. Once per turn, when the character inflicts a Critical Injury with a Brawl or Melee weapon, she may suffer 2 Strain to change the result to any Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Critical Injury result.",
		"rate": "Turn",
		"requiresId": 315,
		"requires": "PRECISION STRIKE"
	},
	{
		"id": 317,
		"talent": "PRECISION STRIKE (SUPREME)",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Precision Strike (Improved) talent to benefit from this talent. Once per game session, when the character inflicts a Critical Injury with an unarmed attack, she may suffer 3 Strain to change the result to any Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Critical Injury result. Combat checks to activate this talent cannot be made with any weapons.",
		"rate": "Session",
		"requiresId": 316,
		"requires": "PRECISION STRIKE (IMPROVED)"
	},
	{
		"id": 318,
		"talent": "PREEMPTIVE AVOIDANCE",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "May spend 1 Story Point to disengage from Engaged enemy as an out-of-turn Incidental.",
		"rate": ""
	},
	{
		"id": 319,
		"talent": "PRESSURE POINT",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When your character makes an unarmed Brawl check targeting a living opponent, they may use this talent to deal Strain damage instead of Wound damage, and inflict additional Strain damage equal to their ranks in Medicine.",
		"rate": ""
	},
	{
		"id": 320,
		"talent": "PREY ON THE WEAK",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "Add +1 damage to one hit of successful combat checks against Disoriented targets per rank of Prey on the Weak.",
		"rate": ""
	},
	{
		"id": 321,
		"talent": "PRIDE AND JOY",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Your character's Signature Vehicle, with a Silhouette of 4 or greater, becomes their \"Pride and Joy\" vehicle. Upgrade the ability of all Social skill checks your character makes while within Short range of the Signature Vehicle once.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 322,
		"talent": "PRIDE AND JOY (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Pride and Joy talent to benefit from this talent. While inside your character's Pride and Joy, recover +1 Strain whenever recovering Strain and spend on checks made to recover Strain to allow an ally also within the vehicle to recover 1 Strain.",
		"rate": "",
		"requiresId": 321,
		"requires": "PRIDE AND JOY"
	},
	{
		"id": 323,
		"talent": "PRIDE AND JOY (SUPREME)",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Pride and Joy (Improved) talent to benefit from this talent. Once per session while inside your character's Pride and Joy, reduce its Silhouette by 2 (to a minimum of 0) for the remainder of the turn and the following turn.",
		"rate": "Session",
		"requiresId": 322,
		"requires": "PRIDE AND JOY (IMPROVED)"
	},
	{
		"id": 324,
		"talent": "PRIME POSITIONS",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "When this character or an ally in Short range takes cover, he increases Soak against ranged attacks by 1 per rank of Prime Positions until he leaves that cover.",
		"rate": ""
	},
	{
		"id": 325,
		"talent": "PRONE MASTERY",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You are skilled at attacking from a prone position. Opponents gain no bonus <span data-dice='g' title='boost dice (blue)'>g</span> on attacks against you while you are prone.",
		"rate": ""
	},
	{
		"id": 326,
		"talent": "PROPER UPBRINGING",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When your character makes a social skill check in polite company (as determined by your GM), they may suffer a number of Strain to use this talent to add an equal number of <span data-result='a' title='advantage'>a</span> to the check. The number may not exceed your character's ranks in Proper Upbringing.",
		"rate": ""
	},
	{
		"id": 327,
		"talent": "PROPHETIC AIM",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "While benefiting from an Aim Maneuver, <span data-result='y' title='despair'>y</span> from the character's Ranged checks cannot cause attacks to hit allies Engaged with the target.",
		"rate": ""
	},
	{
		"id": 328,
		"talent": "PURIFIER",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "All your attacks against centaurs, night stalkers, spore plants, spore carriers, deathclaws and super mutants deal one higher damage than normal.",
		"rate": ""
	},
	{
		"id": 329,
		"talent": "PYROMANIAC",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Some people just want to watch the world burn. Your attacks with fire weapons that possess the Burn quality increase its Burn rating quality by +1.",
		"rate": ""
	},
	{
		"id": 330,
		"talent": "QUICK DRAW",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Once per turn on your character's turn, they may use this talent to draw or holster an easily accessible weapon or item as an Incidental. Quick Draw also reduces a weapon's Prepare rating by one, to a minimum of one.",
		"rate": "Turn"
	},
	{
		"id": 331,
		"talent": "QUICK DRAW (IMPROVED)",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Quick Draw Talent to benefit from this talent. May use Quick Draw twice per turn. This also allows you to reduce the prepare rating by 1 additional point, to a minimum of one.",
		"rate": "",
		"requiresId": 330,
		"requires": "QUICK DRAW"
	},
	{
		"id": 332,
		"talent": "QUICK STRIKE",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character adds <span data-dice='g' title='boost dice (blue)'>g</span> for each rank of Quick Strike to any combat checks they make against any targets that have not yet taken their turn in the current encounter.",
		"rate": ""
	},
	{
		"id": 333,
		"talent": "RAD ABSORPTION",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "You have mutated on a cellular level. Your body is now capable of absorbing radiation and effectively separate harmful radiation and excrete it from your body. Reduce your Radiation level by one for every 24 hours. However, your body is slower to heal cuts and bruises; whenever you recover Wounds, recover 1 less Wound than normal.",
		"rate": ""
	},
	{
		"id": 334,
		"talent": "RAD CHILD",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Increase your Wound threshold by 1 per level of Radiation you have accumulated, instead of decreasing your Wound threshold as according to Radiation level rules.",
		"rate": ""
	},
	{
		"id": 335,
		"talent": "RAD RESISTANT",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Exposure to the wasteland has made you more resilient, gaining <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Rad Resistant against all external radiation sources.",
		"rate": ""
	},
	{
		"id": 336,
		"talent": "RADROACH STYLE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Renowned for its speed and agility, radroach unarmed Brawl style blends jumping strikes, rolling blows, and ground fighting into a continuous onslaught aimed at disorienting and damaging an opponent through superior mobility. While using this style, you do not suffer <span data-dice='b' title='setback dice (black)'>b</span> on Brawl attack rolls nor do opponents gain any <span data-dice='g' title='boost dice (blue)'>g</span> while you are prone. Further, you can crawl and stand up from lying prone as an Incidental if you succeed at a Daunting (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Athletics check. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Mole Rat Style and Deathclaw Style, you can use an Incidental to adopt Deathclaw Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Mole Rat Style.",
		"rate": ""
	},
	{
		"id": 337,
		"talent": "RADSCORPION STYLE",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "The radscorpion unarmed Brawl style emphasizes quick, shifting movements. Its practitioners normally hold their hands flat with the fingers together to mimic the tail of a radscorpion. Able to strike when least expected, radscorpion stylists are known for opportunism and blinding speed. While using the Radscorpion Style talent, you gain Pierce 1 quality on your Brawl combat checks. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Lurk Style and Nightstalker Style, you can use an Incidental to adopt Lurk Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Nightstalker Style.",
		"rate": ""
	},
	{
		"id": 338,
		"talent": "RAIN OF DEATH",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Perform the Rain of Death Maneuver to ignore the increased difficulty due to the Auto-fire quality of attacks made this turn.",
		"rate": ""
	},
	{
		"id": 339,
		"talent": "RAPID REACTION",
		"tier": 1,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "Your character may suffer a number of Strain to use this talent to add an equal number of <span data-result='s' title='success'>s</span> to a Vigilance or Cool check they make to determine Initiative order. The number may not exceed your character's ranks in Rapid Reaction.",
		"rate": ""
	},
	{
		"id": 340,
		"talent": "RAPID RECOVERY",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When healing Strain after an encounter, heal 1 additional Strain per rank of Rapid Recovery.",
		"rate": ""
	},
	{
		"id": 341,
		"talent": "RAPID RELOAD",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "You can reload weapons such weapons and firearms quickly. Every rank of Rapid Reload reduces the Prepare quality of a weapon by 1, to a minimum of 0.",
		"rate": ""
	},
	{
		"id": 342,
		"talent": "RECKLESS CHARGE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "After using a Maneuver to engage an adversary, your character may suffer 2 Strain to use this talent. They then add <span data-result='s' title='success'>s</span><span data-result='s' title='success'>s</span> and <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> to the results of the next Brawl or Melee combat check they make this turn.",
		"rate": ""
	},
	{
		"id": 343,
		"talent": "RECONSTRUCT THE SCENE",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Perform the Reconstruct the Scene Action; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Perception check to identify the physical characteristics of person present at the scene within 24 hours.",
		"rate": ""
	},
	{
		"id": 344,
		"talent": "REDUNDANT SYSTEMS",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, may take a Redundant Systems Action; make an Easy (<span data-dice='d' title='difficulty dice (purple)'>d</span>) Mechanics check to harvest components from a functioning device to repair a broken one without breaking the first device.",
		"rate": "Session"
	},
	{
		"id": 345,
		"talent": "REFRACTOR",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You must be part mirror! All attacks against you with energy weapons suffer a <span data-dice='b' title='setback dice (black)'>b</span> per rank of Refractor.",
		"rate": ""
	},
	{
		"id": 346,
		"talent": "REINFORCED FRAME",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Signature Vehicle gains Massive 1: when making an attack targeting the vehicle, the Critical rating of any weapon used counts as 1 higher.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 347,
		"talent": "REROUTE PROCESSORS",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, you may perform the Reroute Processors Action on a robot that you are Engaged with by making an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Computers check. If the robot is unwilling, the Computers skill check is set with a difficulty equal to the robot's ranks in Brawl. If you succeed, you decrease one of the robot's characteristics by 1 (to a minimum of 0) until the end of the encounter and increases another of its characteristics by 1 (to a maximum of 6) until the end of the encounter. If you are a robot, you may perform this Action on yourself, but still need to make the Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Computers check.",
		"rate": "Encounter"
	},
	{
		"id": 348,
		"talent": "RESEARCHER",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Researcher from your Knowledge checks. Researching takes 50% less time (this does not decrease with additional ranks of Researcher).",
		"rate": ""
	},
	{
		"id": 349,
		"talent": "RESEARCHER (IMPROVED)",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. On a successful Knowledge check, character and allies gain automatic <span data-result='a' title='advantage'>a</span> per rank of Researcher on checks to act on those facts until the end of his next turn.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 350,
		"talent": "RESIST DISARM",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Suffer 2 Strain to avoid being disarmed or have weapon damaged or destroyed.",
		"rate": ""
	},
	{
		"id": 351,
		"talent": "RESOLVE",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "When a character involuntarily suffers Strain, he suffers 1 less Strain per rank of Resolve to a minimum of 1.",
		"rate": ""
	},
	{
		"id": 352,
		"talent": "RESOURCEFUL REFIT",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "May perform the Resourceful Refit Action, make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Mechanics check to scavenge an old attachment to construct a new one, reducing its price by that of the dismantled attachment.",
		"rate": ""
	},
	{
		"id": 353,
		"talent": "RESPECTED",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When first acquired, choose one social group. The character downgrades the difficulty of Social skill checks to interact with members of that social group a number of times equal to his ranks in Respected. The social group affected must be approved by the GM, but possibilities include institutions of higher learning, law-enforcement agencies, a specific biker gang, etc.",
		"rate": ""
	},
	{
		"id": 354,
		"talent": "RETENTION",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "With Retention, the duration of the skill magazines and books lasts for 2 encounters instead of 1 single encounter. Furthermore, it also doubles the benefits that a character would gain from reading a skill magazine or book. This talent is useful when supplementing a skill with magazines, where time may be a factor.",
		"rate": ""
	},
	{
		"id": 355,
		"talent": "RETRIBUTION",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per turn when an adversary attacks an ally within Medium range, your character may spend one Story Point to use this talent to automatically hit that enemy once with a weapon your character is wielding, if the enemy is within the weapon's range. The hit deals the weapon's base damage, plus any damage from applicable talents or abilities.",
		"rate": "Turn"
	},
	{
		"id": 356,
		"talent": "RICOCHET",
		"tier": 5,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "What goes around comes around! Any enemy's ranged attacks will sometimes ricochet back and hit the shooter instead. You may spend <span data-result='y' title='despair'>y</span> from an enemy's attack pool to have the attack ricochet back to the shooter and resolve the attack normally.",
		"rate": ""
	},
	{
		"id": 357,
		"talent": "RUINOUS REPARTEE",
		"tier": 5,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, your character may use this talent to make an opposed Charm or Coercion versus Discipline check targeting one character within Medium range (or within earshot). If successful, the target suffers Strain equal to twice your character's Presence, plus one additional Strain per <span data-result='s' title='success'>s</span>. Your character heals Strain equal to the Strain inflicted. If incapacitated due to this talent, the target could flee the scene in shame, collapse in a dejected heap, or throw themself at your character in fury, depending on your GM and the nature of your character's witty barbs.",
		"rate": "Encounter"
	},
	{
		"id": 358,
		"talent": "SADISTIC REWARD",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Your mind and body are fortified by harming others. If you deal damage to a living creature, all attacks that target you suffer <span data-dice='b' title='setback dice (black)'>b</span> per rank of Sadistic Reward until the beginning of your next turn.",
		"rate": ""
	},
	{
		"id": 359,
		"talent": "SAVAGE SWEEP",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Increase difficulty of Brawl or Melee check once to perform Savage Sweep Action. May spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to hit an additional Engaged target (you cannot strike the same target twice with Savage Sweep).",
		"rate": ""
	},
	{
		"id": 360,
		"talent": "SAVVY NEGOTIATOR",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "While engaged in a debate or argument, make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Negotiation check. If successful, a number of bystanders or observers equal to your Presence sees one of the opponent's points (chosen by your character) as maliciously unreasonable. The GM has the final say as to whether bystanders could see a point as unreasonable, based on who those bystanders are and what the point is. In these cases, the GM can suggest a modified version of that argument that would be more believable.",
		"rate": ""
	},
	{
		"id": 361,
		"talent": "SCATHING TIRADE",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may use this talent to make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Coercion check. For each <span data-result='s' title='success'>s</span> the check generates, one enemy within Short range suffers 1 Strain. For each <span data-result='a' title='advantage'>a</span>, one enemy affected by Scathing Tirade suffers 1 additional Strain.",
		"rate": ""
	},
	{
		"id": 362,
		"talent": "SCATHING TIRADE (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Scathing Tirade talent to benefit from this talent. Enemies affected by your character's Scathing Tirade add <span data-dice='b' title='setback dice (black)'>b</span> to all skill checks they make for a number of rounds equal to your character's ranks in Coercion.",
		"rate": "",
		"requiresId": 361,
		"requires": "SCATHING TIRADE"
	},
	{
		"id": 363,
		"talent": "SCATHING TIRADE (SUPREME)",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Scathing Tirade (Improved) talent to benefit from this talent. Your character may choose to suffer 1 Strain to use the Scathing Tirade talent as a Maneuver, instead of as an Action.",
		"rate": "",
		"requiresId": 362,
		"requires": "SCATHING TIRADE (IMPROVED)"
	},
	{
		"id": 364,
		"talent": "SCAVENGER",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "The character removes <span data-dice='b' title='setback dice (black)'>b</span> equal to the character's ranks in Scavenger from checks made to find or scavenge items or gear. These checks could include Negotiation, Perception, or other checks, depending on circumstances and the GM's discretion. Such skill checks take half their normal time (this does not decrease with multiple ranks in Scavenger).",
		"rate": ""
	},
	{
		"id": 365,
		"talent": "SECOND CHANCES",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Once per encounter choose a number of positive dice equal to ranks in Second Chances and re-roll them.",
		"rate": "Encounter"
	},
	{
		"id": 366,
		"talent": "SECOND WIND",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "Once per encounter, your character may use this talent to heal an amount of Strain equal to their ranks in Second Wind.",
		"rate": "Encounter",
		"marked": false,
		"summary": "Heal 1 Strain per rank"
	},
	{
		"id": 367,
		"talent": "SEEN A LOT OF THINGS",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Whenever your character fails a Knowledge check, they may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to roll the check again during their next turn.",
		"rate": ""
	},
	{
		"id": 368,
		"talent": "SEIZE THE INITIATIVE",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Once per session, as a Maneuver, may make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Athletics check. On success, other PCs may take their turns immediately.",
		"rate": "Session"
	},
	{
		"id": 369,
		"talent": "SELECTIVE DETONATION",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When using a weapon with the Blast quality spend <span data-result='a' title='advantage'>a</span> to exclude 1 target that would be affected by the explosion, up to ranks in Selective Detonation.",
		"rate": ""
	},
	{
		"id": 370,
		"talent": "SENSE ADVANTAGE",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Once per session, may add <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> to one NPC's skill check.",
		"rate": "Session"
	},
	{
		"id": 371,
		"talent": "SENSE DANGER",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per game session, the character may remove <span data-dice='b' title='setback dice (black)'>b</span><span data-dice='b' title='setback dice (black)'>b</span> from any one skill check.",
		"rate": "Session"
	},
	{
		"id": 372,
		"talent": "SENSE EMOTIONS",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> to all Charm, Coercion, and Deception checks.",
		"rate": "",
		"marked": false
	},
	{
		"id": 373,
		"talent": "SET LASERS FOR FUN",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "All laser weapons deal increased Critical Injuries in your hands. Add +5 to the result of all Critical Injuries that you inflict with a laser weapon per rank of appropriate skill used (Gunnery, Ranged [Heavy] or Ranged [Light].",
		"rate": ""
	},
	{
		"id": 374,
		"talent": "SHAKE IT OFF",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You support your allies and help them recover from crippling effects. When you are in Engaged range to one or more allies who also have this talent, you gain a bonus <span data-dice='g' title='boost dice (blue)'>g</span> on all skill checks.",
		"rate": ""
	},
	{
		"id": 375,
		"talent": "SHARE PAIN",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "Your character must have purchased the Animal Companion talent to benefit from this talent. May perform the Share Pain Incidental when animal companion suffers Wounds. Reduce Wounds suffered to half, then character suffers Wounds equal to number reduced.",
		"rate": "",
		"requiresId": 10,
		"requires": "ANIMAL COMPANION"
	},
	{
		"id": 376,
		"talent": "SHORTCUT",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "During a chase, add <span data-dice='g' title='boost dice (blue)'>g</span> per rank in Shortcut to any checks made to catch or escape an opponent.",
		"rate": ""
	},
	{
		"id": 377,
		"talent": "SHORTCUT (IMPROVED)",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Shortcut talent to benefit from this talent. When engaging in a chase or race, may suffer 2 Strain to add <span data-result='s' title='success'>s</span> equal to ranks in Shortcut to the check.",
		"rate": "",
		"requiresId": 376,
		"requires": "SHORTCUT"
	},
	{
		"id": 378,
		"talent": "SHOTGUN SURGEON",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "When using shotguns, regardless of ammunition used, treat the shotgun as if it had the Pierce 1 quality.",
		"rate": ""
	},
	{
		"id": 379,
		"talent": "SHOWBOAT",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a check in a vehicle, may suffer 2 Strain to gain <span data-result='x' title='triumph'>x</span> on success or <span data-result='y' title='despair'>y</span> on failure. You must declare that you use this talent before rolling your check.",
		"rate": ""
	},
	{
		"id": 380,
		"talent": "SIDE STEP",
		"tier": 2,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Once per turn, your character may suffer a number of Strain no greater than their ranks in Side Step to use this talent. Until the end of your character's next turn, upgrade the difficulty of all ranged combat checks targeting your character a number of times equal to the Strain suffered.",
		"rate": "Turn",
		"marked": false,
		"summary": "max 1 Strain per rank: Until the end of your next turn, upgrade 1 difficulty/Strain of all ranged combat checks against you"
	},
	{
		"id": 381,
		"talent": "SIGNATURE VEHICLE",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Choose one vehicle with a silhouette of 3 or lower that your character owns. This vehicle is your character's \"Signature Vehicle.\" Upgrade the ability of all Mechanics checks made to work on the vehicle once. If the vehicle ever lost or destroyed, the character may apply Signature Vehicle to a new vehicle that meets the requirements.",
		"rate": ""
	},
	{
		"id": 382,
		"talent": "SILVER PALM",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You are no stranger to haggling and the art of the deal. Negotiation becomes a career skill when you select the Silver Palm talent. Furthermore, you add <span data-dice='g' title='boost dice (blue)'>g</span> to Negotiation checks per rank of Silver Palm.",
		"rate": ""
	},
	{
		"id": 383,
		"talent": "SIXTH SENSE",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "The character gains +1 Ranged Defense.",
		"rate": ""
	},
	{
		"id": 384,
		"talent": "SKILLED JOCKEY",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Skilled Driver from your Driving, Operating, and Piloting checks.",
		"rate": ""
	},
	{
		"id": 385,
		"talent": "SKILLED SLICER",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a Computers check may spend <span data-result='x' title='triumph'>x</span> a to make further Computers checks within this system as Maneuvers.",
		"rate": ""
	},
	{
		"id": 386,
		"talent": "SKILLED TEACHER",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "Before an ally within Short range makes a skill check, if that ally has fewer ranks in that skill than your character does, your character may suffer a number of Strain no greater than ranks in Skilled Teacher to add an equal number of <span data-result='s' title='success'>s</span> to the ally's check.",
		"rate": ""
	},
	{
		"id": 387,
		"talent": "SMART HANDLING",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, while aboard a vehicle of Silhouette 4 or higher, your character may make a Smart Handling Action; making a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check. If successful, until the start of the next turn, the vehicle's handling increases by two plus one per <span data-result='a' title='advantage'>a</span> scored on the check to a maximum handling of +4. <span data-result='x' title='triumph'>x</span> can be spent to extend the effect until the end of the encounter.",
		"rate": "Session"
	},
	{
		"id": 388,
		"talent": "SMOOTH TALKER",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When first acquired choose 1 skill; Charm, Coercion, Deception, or Negotiation. When making checks with that skill spend <span data-result='x' title='triumph'>x</span> to gain additional <span data-result='s' title='success'>s</span> equal to ranks in Smooth Talker.",
		"rate": ""
	},
	{
		"id": 389,
		"talent": "SNIPER SHOT",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn before making a non-thrown Ranged attack, the character may perform the Sniper Shot Maneuver. Sniper Shot increases the maximum range of his ranged weapon up to one range band per rank. For each rank beyond the normal maximum of the weapon, upgrade the difficulty of the check by one (this is in addition to the increased difficulty of the shot due to longer range).",
		"rate": "Turn"
	},
	{
		"id": 390,
		"talent": "SOLAR POWERED",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Catch some rays! Gain <span data-dice='g' title='boost dice (blue)'>g</span> to Perception per rank of Solar Powered between the hours of 6:00 a.m. and 6:00 p.m. If your character has the Solar Powered talent he cannot have the Night Person talent.",
		"rate": ""
	},
	{
		"id": 391,
		"talent": "SOLID REPAIRS",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "The character repairs one additional point of hull trauma per rank of Solid Repairs whenever he repairs a vehicle.",
		"rate": ""
	},
	{
		"id": 392,
		"talent": "SOOTHING TONE",
		"tier": 1,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, take a Soothing Tone Action; make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to allow a beast to recover Strain equal to <span data-result='s' title='success'>s</span>.",
		"rate": "Encounter"
	},
	{
		"id": 393,
		"talent": "SORRY ABOUT THE MESS",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Decrease the Critical Rating of a weapon by 1 (to a minimum of 1) against targets that have not yet acted this encounter.",
		"rate": ""
	},
	{
		"id": 394,
		"talent": "SOUND INVESTMENTS",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "At the start of each session, gain 100 bottle caps for each rank of Sound Investments.",
		"rate": "Session"
	},
	{
		"id": 395,
		"talent": "SPITFIRE",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "After a successful combined check with two Ranged [Light] weapons, additional hits can be allocated to other targets within range of the weapon.",
		"rate": ""
	},
	{
		"id": 396,
		"talent": "SPRAY AND PRAY",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Spray 'n Pray reduces the damage you do to your companions by 50% - rounded down. In other words, you only do half of your normal damage to allies that you accidentally or actively hit in combat situations, from a <span data-result='y' title='despair'>y</span> result, for example.",
		"rate": ""
	},
	{
		"id": 397,
		"talent": "STAGGERING CRITICAL",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Your Critical Injuries leave your opponents reeling. When you successfully inflict a Critical Injury, the target is also Staggered for 1 turn.",
		"rate": ""
	},
	{
		"id": 398,
		"talent": "STALKER",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Stalker to all Coordination and Stealth checks.",
		"rate": "",
		"marked": false
	},
	{
		"id": 399,
		"talent": "STALWART",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "You adopt a defensive stance that allows you to absorb and redirect hits. When you are the target of a combat check, but before the dice are rolled and the result calculated, you can opt to forefeit your Defense Rating and instead add it to your Soak instead. For example, if you have Melee Defense rating of 2 you can negate this and increase your Soak by 2 points against a Brawl or Melee attack. Or if you have Ranged Defense 1, you could negate this to improve your Soak value by 1 against ranged attacks.",
		"rate": ""
	},
	{
		"id": 400,
		"talent": "STEADY AIM",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character does not lose the benefits of the Aim Maneuver if they perform other Maneuvers (including moving) or Actions. Your character does lose the benefits of the Aim Maneuver if the encounter ends.",
		"rate": ""
	},
	{
		"id": 401,
		"talent": "STEADY NERVES",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You remove <span data-dice='b' title='setback dice (black)'>b</span> per rank of Steady Nerves from Cool and Skulduggery checks.",
		"rate": ""
	},
	{
		"id": 402,
		"talent": "STIM APPLICATION",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "You may take the Stim Application Action. To perform this Action, you must have access to chems, a medpac, or stimpak. You make an Average (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Medicine check. If successful, one ally you are Engaged with (including yourself) increases one characteristic of your choice by one for the remainder of the encounter, and suffers four Strain. A single character's individual characteristic may each only be increased once by Stim Application during an encounter.",
		"rate": "",
		"marked": false,
		"summary": "With Average Medicine check, 1 Engaged with ally (or yourself) spends 4 Strain to increase 1 Charac by 1 for the encounter"
	},
	{
		"id": 403,
		"talent": "STIM APPLICATION (IMPROVED)",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Stim Application talent to benefit from this talent. When performing the Stim Application it becomes an Incidental instead of an Action. You may increase the difficulty of the Medicine check to Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) as an Incidental. If you do so, the target of the talent suffers one Strain instead of four.",
		"rate": "",
		"requiresId": 402,
		"requires": "STIM APPLICATION",
		"summary": "Increase the difficulty of the Medicine check to Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) as an Incidental. The target of the talent suffers 1 Strain instead of 4."
	},
	{
		"id": 404,
		"talent": "STIM APPLICATION (SUPREME)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Stim Application (Improved) talent to benefit from this talent. When performing the Stim Application Incidental, each <span data-result='x' title='triumph'>x</span> may be spent to increase an additional characteristic by one.",
		"rate": "",
		"requiresId": 403,
		"requires": "STIM APPLICATION (IMPROVED)"
	},
	{
		"id": 405,
		"talent": "STIMPAK SPECIALIZATION",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "When your character uses stimpaks (or their equivalent, depending on the setting), the target heals one additional Wound per rank of Stimpak Specialization. The sixth stimpak and beyond each day still has no effect.",
		"rate": ""
	},
	{
		"id": 406,
		"talent": "STINGWING STYLE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You take advantage of basic training in skills that affect movement to enhance those skills through combat ability. You can move with the quiet grace of an stingwing. While using this unarmed Brawl style, you can use your ranks in Brawl in place of your ranks in Stealth when you make Stealth checks. Foes that fail their Perception checks and don't otherwise notice you do not add their Defense Rating to your first attack against them. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Radscorpion Style and Lurk Style, you can use an Incidental to adopt Lurk Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Radscorpion Style.",
		"rate": ""
	},
	{
		"id": 407,
		"talent": "STONEWALL",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "All melee and brawl attacks that target you suffer a <span data-dice='b' title='setback dice (black)'>b</span> to the attack dice pool, and you cannot be knocked prone by such attacks.",
		"rate": ""
	},
	{
		"id": 408,
		"talent": "STREET SLANG",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "When making a Social skill check in criminal or dubious company, may suffer a number of Strain no greater than ranks in Street Slang to add an equal number of <span data-result='a' title='advantage'>a</span> to the check.",
		"rate": ""
	},
	{
		"id": 409,
		"talent": "STREET SMARTS",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Once per session, may take a Street Smarts Action; make a Formidable (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Streetwise or Knowledge check to learn one vital clue from the GM. Reduce the difficulty once per rank of Street Smarts.",
		"rate": "Session"
	},
	{
		"id": 410,
		"talent": "STRONG ARM",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Treat thrown weapons as if they had one step greater range, to a maximum of Medium range.",
		"rate": ""
	},
	{
		"id": 411,
		"talent": "STRONG BACK",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Increase your Encumbrance threshold value by 2 per rank of Strong Back.",
		"rate": ""
	},
	{
		"id": 412,
		"talent": "STUDIOUS PLOTTING",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "When making a Streetwise or Survival skill check to navigate, the character may use Intellect instead of Cunning.",
		"rate": ""
	},
	{
		"id": 413,
		"talent": "STUNNING BLOW",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When making a Melee combat check, may inflict damage as Strain instead of Wounds. However, Soak does still apply.",
		"rate": ""
	},
	{
		"id": 414,
		"talent": "STUNNING BLOW (IMPROVED)",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Stunning Blow talent to benefit from this talent. When dealing Strain damage with Brawl or Melee combat checks, may spend <span data-result='x' title='triumph'>x</span> to Stagger target for 1 turn per <span data-result='x' title='triumph'>x</span>.",
		"rate": "",
		"requiresId": 413,
		"requires": "STUNNING BLOW"
	},
	{
		"id": 415,
		"talent": "STURDY FRAME",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "While wearing armor, your sturdy frame and build allows you to decrease the Encumbrance of the armor by 1, to a minimum of 0.",
		"rate": ""
	},
	{
		"id": 416,
		"talent": "SUNDER EXPERTISE",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Each <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> your character spends to activate a weapon's Sunder quality damages the target item two steps, instead of one.",
		"rate": ""
	},
	{
		"id": 417,
		"talent": "SUNDERING STRIKE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You can sunder your foes' weapons more easily. Whenever you attempt to active a Sunder effect as part of a combat check, you require one less <span data-result='a' title='advantage'>a</span> to activate the effect, to a minimum of <span data-result='a' title='advantage'>a</span>.",
		"rate": ""
	},
	{
		"id": 418,
		"talent": "SUPER SLAM!",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "All Brawl and Melee weapons that have the Knockdown quality require one less <span data-result='a' title='advantage'>a</span> to activate on a combat check, to a minimum of one <span data-result='a' title='advantage'>a</span>.",
		"rate": ""
	},
	{
		"id": 419,
		"talent": "SUPERHUMAN SKILL",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When purchased, choose a skill. Once per session, when rolling <span data-result='y' title='despair'>y</span> on a check with that skill, spend a Story Point to remove the <span data-result='y' title='despair'>y</span> and replace it with a number of <span data-result='s' title='success'>s</span> equal to ranks in that skill.",
		"rate": "Session"
	},
	{
		"id": 420,
		"talent": "SUPERIOR REFLEXES",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "The character gains +1 Melee Defense.",
		"rate": ""
	},
	{
		"id": 421,
		"talent": "SUPPORTING EVIDENCE",
		"tier": 4,
		"activation": "Passive",
		"ranked": true,
		"description": "When assisting an ally with a Charm, Deception, Leadership, or Negotiation check, add <span data-result='a' title='advantage'>a</span> automatic per rank of Supporting Evidence.",
		"rate": ""
	},
	{
		"id": 422,
		"talent": "SUPPRESSING FIRE",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "The character and each ally within Short range may spend <span data-result='a' title='advantage'>a</span> on their failed combat checks to inflict one Strain on the target per rank of Suppressing Fire. Each character can only activate this effect once per turn.",
		"rate": "Turn"
	},
	{
		"id": 423,
		"talent": "SURGEON",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When your character makes a Medicine check to heal Wounds, the target heals one additional Wound per rank of Surgeon.",
		"rate": "",
		"marked": false,
		"summary": "On a Medicine check to heal, heal 1 more Wound per rank"
	},
	{
		"id": 424,
		"talent": "SWIFT",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character does not suffer the penalties for moving through difficult terrain (they move through difficult terrain at normal speed without spending additional Maneuvers).",
		"rate": ""
	},
	{
		"id": 425,
		"talent": "TALK THE TALK",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When about to make a Knowledge skill check, the character may spend one Story Point to substitute Knowledge with Streetwise. The GM may suitable embellish any information gathered due to a success on the check to reflect its possible criminal and underworld origins.",
		"rate": ""
	},
	{
		"id": 426,
		"talent": "TARGETED FIREPOWER",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, identify one enemy target and make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check. If successful, for the rest of the encounter, allies within Short range of your character add one <span data-result='a' title='advantage'>a</span> to attacks against the target equal to <span data-result='s' title='success'>s</span> generated on the check.",
		"rate": "Session",
		"marked": false,
		"summary": "With Hard Knowledge check, for all the encounter, allies in Short range of me add <span data-result='a' title='advantage'>a</span> per <span data-result='s' title='success'>s</span> generated on the check to attacks vs the target"
	},
	{
		"id": 427,
		"talent": "TECHNICAL APTITUDE",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "When making a Computer skill check may spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> to reduce the time spent to complete the task by 50%",
		"rate": "",
		"marked": false,
		"summary": "On Computer check, spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> to reduce the time spent by 50%"
	},
	{
		"id": 428,
		"talent": "THAT'S HOW IT'S DONE",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": true,
		"description": "May suffer 1 Strain on successful skill check to add <span data-result='a' title='advantage'>a</span> to the same skill check made by a number of allies equally to Willpower within Short range during the next turn. Range increases with ranks.",
		"rate": ""
	},
	{
		"id": 429,
		"talent": "THIRD TIME'S THE CHARM",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "One or more of the gods must be smiling upon you. Once per encounter you can select one negative die and re-roll it. You must keep the result of the re-roll, even if it is not as good as the first roll. You suffer 3 Strain when you activate the Third Time's the Charm talent.",
		"rate": "Encounter"
	},
	{
		"id": 430,
		"talent": "THOROUGH ASSESSMENT",
		"tier": 5,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per session, take a Thorough Assessment Action: make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check to gain <span data-result='s' title='success'>s</span> equal to that can be distributed during the session.",
		"rate": "Session"
	},
	{
		"id": 431,
		"talent": "THREATEN",
		"tier": 2,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": true,
		"description": "After an adversary within Short range of your character resolves a combat check that deals damage to one of your character's allies, your character may suffer 3 Strain to use this talent to inflict a number of Strain on the adversary equal to your character's ranks in Coercion. The range of this talent increases by one band per rank of Threaten beyond the first.",
		"rate": ""
	},
	{
		"id": 432,
		"talent": "THUG",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You have a knack for getting the jump on the competition and pushing other people around. While others debate, you act. You gain <span data-dice='g' title='boost dice (blue)'>g</span> to Initiative checks, and also a <span data-result='a' title='advantage'>a</span> bonus to Coercion skill checks.",
		"rate": ""
	},
	{
		"id": 433,
		"talent": "TIME TO GO",
		"tier": 2,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "The character may spend 1 Story Point to perform a move Maneuver as an Incidental to attempt to move into cover or out of the blast range of a weapon or explosion.",
		"rate": ""
	},
	{
		"id": 434,
		"talent": "TIME TO GO (IMPROVED)",
		"tier": 3,
		"activation": "Active (Maneuver)",
		"ranked": false,
		"description": "Your character must have purchased the Time to Go talent to benefit from this talent. When activating Time to Go, allow one Engaged ally to also perform an out-of-turn move Maneuver as an Incidental to attempt to move into cover or out of the blast range of a weapon or explosion.",
		"rate": "",
		"requiresId": 433,
		"requires": "TIME TO GO"
	},
	{
		"id": 435,
		"talent": "TINKERER",
		"tier": 2,
		"activation": "Passive",
		"ranked": true,
		"description": "May add 1 additional hard point to a number of items equal to ranks in Tinkerer. Each item may only be modified once.",
		"rate": ""
	},
	{
		"id": 436,
		"talent": "TOUCH OF FATE",
		"tier": 2,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per game session, the character may add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> to any one skill check.",
		"rate": "Session"
	},
	{
		"id": 437,
		"talent": "TOUGHENED",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Each rank of Toughened increases your character's Wound threshold by two.",
		"rate": "",
		"marked": false,
		"summary": "Increases Wound threshold by 2 per rank"
	},
	{
		"id": 438,
		"talent": "TRAVEL LIGHT",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "When you are wearing no armor or an armor with a base Encumbrance of 3 or less, add <span data-dice='g' title='boost dice (blue)'>g</span> on all Athletics and Coordination checks.",
		"rate": ""
	},
	{
		"id": 439,
		"talent": "TRICKY TARGET",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Count vehicle piloted as having a Silhouette 1 lower when being attacked.",
		"rate": ""
	},
	{
		"id": 440,
		"talent": "TRUE AIM",
		"tier": 4,
		"activation": "Active (Maneuver)",
		"ranked": true,
		"description": "Once per turn, before the character makes a ranged combat check, he may perform a True Aim Maneuver. By performing this Maneuver, the character gains all the benefits for aiming and also upgrades his attack roll once per rank of True Aim.",
		"rate": "Turn"
	},
	{
		"id": 441,
		"talent": "TRUST NO ONE",
		"tier": 4,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When targeted by a Social skill check, suffer 1 Strain to add automatic <span data-result='f' title='failure'>f</span> to the check. If the check fails with <span data-result='y' title='despair'>y</span>, your character may immediately perform a Maneuver as an out-of-turn Incidental.",
		"rate": ""
	},
	{
		"id": 442,
		"talent": "TRUST THE OVERSEER",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": true,
		"description": "Make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Leadership check. If successful, for the rest of the encounter allies within Short range increase their ranks in Discipline by an amount equal to ranks in Trust the Overseer.",
		"rate": ""
	},
	{
		"id": 443,
		"talent": "TUMBLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "While engaged with one or more adversaries, may suffer 2 Strain to move to Short range as an incidental, and thus circumventing having to disengage from opponents.",
		"rate": ""
	},
	{
		"id": 444,
		"talent": "TUNE MANEUVERING PARTS",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "Your character must have purchased the Signature Vehicle talent to benefit from this talent. Increase the Handling of Signature Vehicle by 1 per rank of Tuned Maneuvering Parts.",
		"rate": "",
		"requiresId": 381,
		"requires": "SIGNATURE VEHICLE"
	},
	{
		"id": 445,
		"talent": "TWIN WARRIORS",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Some martial arts schools teach their students to fight in teams, one martial artist using aggressive techniques and the other fighting defensively, the better to keep opponents off balance. For each ally, to a maximum of two, who possess this talent, is fighting using the Brawl skill and is within Short range of you, you benefit from a +1 bonus to Melee Defense and also add a <span data-dice='g' title='boost dice (blue)'>g</span> to Brawl combat checks. No two characters may benefit from the same bonus simultaneously but any character can change the bonuses (including the bonuses of their allies) on their turn as a Maneuver.",
		"rate": ""
	},
	{
		"id": 446,
		"talent": "TWISTED WORDS",
		"tier": 3,
		"activation": "Active (Incidental, Out-of-Turn)",
		"ranked": false,
		"description": "When an incoming Social skill check generates <span data-result='t' title='threat'>t</span><span data-result='t' title='threat'>t</span> or <span data-result='y' title='despair'>y</span>, may suffer 1 Strain as an Incidental to inflict Strain equal to ranks in Coercion on speaker.",
		"rate": ""
	},
	{
		"id": 447,
		"talent": "UNARMED PARRY",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "May Parry while unarmed. When your character suffers a hit from a Brawl or Melee combat check, after damage is calculated but before Soak is applied (so immediately after Step 3 of Perform a Combat Check, page 102 in the GENESYS core rulebook), your character may suffer 3 Strain to use this talent to reduce the damage of the hit by two. This talent can only be used once per hit, and your character does not need to be wielding a Melee weapon.",
		"rate": ""
	},
	{
		"id": 448,
		"talent": "UNBELIEVABLE LUCK",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "The powers of fortune truly smile on you more than most others. As long as there are at least Story Points equal to the number of player characters excluding yourself in the player pool, you gain a <span data-dice='g' title='boost dice (blue)'>g</span> bonus on all skill checks that you make. For example a gaming group with 5 player characters (obviously not including the GM) require a minimum of 4 Story Points in the player's pool for you to benefit from the Unbelievable Luck talent.",
		"rate": ""
	},
	{
		"id": 449,
		"talent": "UNCANNY REACTIONS",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Uncanny Reactions to all Vigilance checks.",
		"rate": ""
	},
	{
		"id": 450,
		"talent": "UNCANNY SENSES",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "Add <span data-dice='g' title='boost dice (blue)'>g</span> per rank of Uncanny Senses to all Perception checks.",
		"rate": ""
	},
	{
		"id": 451,
		"talent": "UNDYING FATE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "As an Incidental, you can determine how close creatures are to death. This extraordinary ability can be used at will. The GM will tell you what the status is of one specific creature that you can see, in terms of Wounds and Strain and its threshold. You take a <span data-dice='b' title='setback dice (black)'>b</span> penalty to your next skill check after having used the Undying Fate talent.",
		"rate": ""
	},
	{
		"id": 452,
		"talent": "UNMATCHED FORTUNE",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "By some odd twist of fate or grain of luck you gain an extra edge when you need it the most. You can spend a Story Point to set aside any <span data-result='x' title='triumph'>x</span> result on a skill check and roll a new <span data-dice='c' title='proficiency dice (yellow)'>c</span> in its place. For every <span data-dice='c' title='proficiency dice (yellow)'>c</span> you generate on your roll, even on newly added dice, you roll a new <span data-dice='c' title='proficiency dice (yellow)'>c</span> to your skill check. However, any subsequent <span data-result='x' title='triumph'>x</span> results only count as <span data-result='s' title='success'>s</span> results.",
		"rate": ""
	},
	{
		"id": 453,
		"talent": "UNRELENTING",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per turn after resolving a successful Brawl or Melee combat check, your character may suffer 4 Strain to use this talent to make an additional attack as an incidental against the same target. Increase the difficulty of the combat check once if this attack uses a secondary weapon, or by two if the attack uses the same weapon.",
		"rate": "Turn"
	},
	{
		"id": 454,
		"talent": "UNRELENTING SKEPTIC",
		"tier": 4,
		"activation": "Passive",
		"ranked": false,
		"description": "When targeted by a Deception check, the character automatically adds <span data-result='f' title='failure'>f</span> to the check equal to ranks in Vigilance.",
		"rate": ""
	},
	{
		"id": 455,
		"talent": "UNRELENTING SKEPTIC (IMPROVED)",
		"tier": 5,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Your character must have purchased the Unrelenting Skeptic talent to benefit from this talent. When targeted by a Deception check that fails, may spend 1 Story Point to add <span data-result='y' title='despair'>y</span> to results.",
		"rate": "",
		"requiresId": 454,
		"requires": "UNRELENTING SKEPTIC"
	},
	{
		"id": 456,
		"talent": "UNREMARKABLE",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "Other characters add <span data-result='f' title='failure'>f</span> to any checks made to find or identify your character in a crowd.",
		"rate": ""
	},
	{
		"id": 457,
		"talent": "UNSTOPPABLE",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "If a Critical Injury roll is 1 or reduced to 1, do not receive the Critical Injury.",
		"rate": ""
	},
	{
		"id": 458,
		"talent": "UP THE ANTE",
		"tier": 3,
		"activation": "Passive",
		"ranked": true,
		"description": "When gambling win 10% more bottle caps per rank of Up the Ante.",
		"rate": ""
	},
	{
		"id": 459,
		"talent": "UTILITY BELT",
		"tier": 3,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Spend 1 Story Point to perform a Utility Belt Incidental; produce an undocumented item (maximum 1 encumbrance) or weapon (with Limited Ammo One quality) from a tool belt or a satchel.",
		"rate": "",
		"marked": false,
		"summary": "Spend 1 Story Point to produce an undocumented item (max 1 encumbrance) or weapon (Limited Ammo 1)"
	},
	{
		"id": 460,
		"talent": "VALUABLE FACTS",
		"tier": 3,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per encounter, the character may make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check. If successful, the character may add <span data-result='x' title='triumph'>x</span> to any one check made by an allied character during the encounter. The subsequent check should relate in some way to the facts the character learned, or the player should come up with an explanation for why the information the character learned is instrumental in the success of the ally's check.",
		"rate": "Encounter",
		"marked": false,
		"summary": "With Hard Knowledge check, add <span data-result='x' title='triumph'>x</span> to any one check made by an allied character during the encounter"
	},
	{
		"id": 461,
		"talent": "VEHICLE COMBAT TRAINING",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Driving, Gunnery and Piloting become career skills.",
		"rate": ""
	},
	{
		"id": 462,
		"talent": "VIGILANT RECYCLER",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "When using energy weapons (laser and plasma weapons), you cannot run out of energy (ammunition) on a <span data-result='y' title='despair'>y</span> result in a combat check.",
		"rate": ""
	},
	{
		"id": 463,
		"talent": "VOW OF ABSTINENCE",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You have taken a sacred vow to abstain from alcoholic beverages, chems, stimulants such as caffeine, and intoxication. You gain a <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> bonus on Resilience checks against poisons and chems (as long as you are subjected to a chem unwillingly). To fulfill your vow, you must not consume intoxicating, stimulating, depressant, or hallucinogenic substances, including alcohol, caffeine, and other chems. If you intentionally break your vow, you immediately and irrevocably lose the benefit of this talent. You may not take another talent to replace it. If you break your vow unintentionally (a chem slipped into your drink, for example), you lose the benefit of this talent until you perform a suitable penance.",
		"rate": ""
	},
	{
		"id": 464,
		"talent": "VOW OF CHASTITY",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You have taken a sacred vow to refrain from marriage and sexual intercourse. You gain a <span data-dice='g' title='boost dice (blue)'>g</span> bonus on attempts to resist Charm and Coercion checks. To fulfill your vow, you must abstain from any sexual contact with any other creature. If you intentionally break your vow, you immediately and irrevocably lose the benefit of this talent. You may not take another feat to replace it. If you break your vow unintentionally (being raped, for example), you lose the benefit of this talent until you perform a suitable penance.",
		"rate": ""
	},
	{
		"id": 465,
		"talent": "VOW OF PURITY",
		"tier": 1,
		"activation": "Passive",
		"ranked": false,
		"description": "You have taken a sacred vow to avoid contact with dead flesh. You add <span data-dice='g' title='boost dice (blue)'>g</span><span data-dice='g' title='boost dice (blue)'>g</span> to Resilience checks to resist diseases. To fulfill your vow, you must avoid all contact with dead creatures, including meat cooked for food. You may not touch fallen foes. You may fight the living dead, but must purify yourself as soon as possible afterward. You may touch dead characters in order to restore them to life, but for no other purpose. If you fight the living dead or accidentally touch dead flesh, you must purify yourself in a special ritual that requires 1 hour. If you intentionally break your vow, you immediately and irrevocably lose the benefit of this talent. You may not take another talent to replace it. If you break your vow unintentionally, you lose the benefit of this talent until you perform a suitable penance.",
		"rate": ""
	},
	{
		"id": 466,
		"talent": "WALKER INSTINCT",
		"tier": 2,
		"activation": "Passive",
		"ranked": false,
		"description": "Add automatic <span data-result='s' title='success'>s</span> and <span data-result='a' title='advantage'>a</span> to your Perception checks while outside and outdoors.",
		"rate": ""
	},
	{
		"id": 467,
		"talent": "WANAMINGO STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "You savagely squeeze and twist when grappling. This grappling unarmed Brawl style mimics the powerful crushing blows of the tentacled wanamingo. This style focuses on pulverizing holds around a creature's chest, limbs, and throat. If you succeed on a Brawl combat check against any target while using this style, you can inflict Strain damage instead of Wound damage. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Mole Rat Style and Deathclaw Style, you can use an Incidental to adopt Deathclaw Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Mole Rat Style.",
		"rate": ""
	},
	{
		"id": 468,
		"talent": "WARRIOR INSTINCTS",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "You were born with a warrior's instincts and intuition. You add <span data-result='s' title='success'>s</span> to Initiative checks per rank of Warrior Instinct.",
		"rate": ""
	},
	{
		"id": 469,
		"talent": "WEAK FOUNDATION",
		"tier": 4,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Once per game session, your character may identify one bunker, weapon emplacement, or other fixed combat structure (subject to the GM's approval) and then take a Weak Foundation Action; make a Hard (<span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span><span data-dice='d' title='difficulty dice (purple)'>d</span>) Knowledge check. If successful, until the end of the encounter, your character and all allies add automatic <span data-result='s' title='success'>s</span> or <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> to all combat checks made targeting the structure (your character's choice).",
		"rate": "Session"
	},
	{
		"id": 470,
		"talent": "WELL-ROUNDED",
		"tier": 3,
		"activation": "Passive",
		"ranked": false,
		"description": "Choose any two skills. They permanently become career skills for your character.",
		"rate": ""
	},
	{
		"id": 471,
		"talent": "WHEEL AND DEAL",
		"tier": 1,
		"activation": "Passive",
		"ranked": true,
		"description": "When selling good legally, gain 10% more bottle caps per rank of Wheel and Deal.",
		"rate": ""
	},
	{
		"id": 472,
		"talent": "WHIRLWIND",
		"tier": 5,
		"activation": "Active (Action)",
		"ranked": false,
		"description": "Your character may suffer 4 Strain to use this talent to make a Brawl or Melee attack against the engaged adversary who is hardest to hit (as determined by the GM), increasing the difficulty by one. If the combat check succeeds, each adversary Engaged with the character suffers one hit from the attack, that deals base damage plus damage equal to the total <span data-result='s' title='success'>s</span> scored on the check.",
		"rate": ""
	},
	{
		"id": 473,
		"talent": "WISE WARRIOR",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per turn when making a combat check, you may perform a Wise Warrior Incidental to spend 1 Story Point and use any characteristic for the check.",
		"rate": "Turn"
	},
	{
		"id": 474,
		"talent": "WISE WARRIOR (IMPROVED)",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Your character must have purchased the Wise Warrior talent to benefit from this talent. When you perform the Wise Warrior Incidental, one ally at Short range may use the same characteristic that you used in the Wise Warrior Incidental for the next combat check the ally makes before the end of your next turn.",
		"rate": "",
		"requiresId": 473,
		"requires": "WISE WARRIOR"
	},
	{
		"id": 475,
		"talent": "YAO GUAI STYLE",
		"tier": 1,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "This Brawl style seeks to emulate the tenacity and savagery of the vicious yao guai. It focuses on tripping or penalizing an opponent's movement. While in this unarmed Brawl style, you hamper foes that turn their backs on you. For every 3 points of uncanceled or unsoaked damage you deal to the target, you impose a <span data-dice='b' title='setback dice (black)'>b</span> to all of its skill checks until the end of its next turn. If you deal 6 or more damage, you can also spend <span data-result='a' title='advantage'>a</span><span data-result='a' title='advantage'>a</span> or <span data-result='x' title='triumph'>x</span> to knock the opponent prone. As an Incidental, you can enter the stance employed by the fighting style. Although you cannot use a style talent before combat begins, the style you are in persists until you spend an Incidental to switch to a different combat style. For example, if you have the Cazador Style and Coyote Style, you can use an Incidental to adopt Cazador Style at the start of one turn, and then by another Incidental at the start of your next turn, you could adopt Coyote Style.",
		"rate": ""
	},
	{
		"id": 476,
		"talent": "WORKS LIKE A CHARM",
		"tier": 4,
		"activation": "Active (Incidental)",
		"ranked": false,
		"description": "Once per game session, the character can choose to make one skill check using Presence rather than the characteristic linked to that skill. When he does this, he must explain how, in this particular instance, his social ability helps him overcome this challenge.",
		"rate": "Session"
	},
	{
		"id": 477,
		"talent": "ZEALOUS FIRE",
		"tier": 5,
		"activation": "Passive",
		"ranked": false,
		"description": "Each time your Game Master spends a Story Point, your character heals 2 Strain.",
		"rate": ""
	}
];
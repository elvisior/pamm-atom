(function() {
	var mappingIdentifier = {
		"com.aevns.acliffplanets": "cliffPlanetsAE",
		"com.elu.pa_strat_build_icons": "pa_strat_build_icons",
		"com.pa.DeathByDenim.MouseFix": "MouseFix",
		"com.pa.DeathByDenim.dFavouriteColour": "dFavouriteColour",
		"com.pa.DeathByDenim.dNotes": "dNotes",
		"com.pa.DeathByDenim.dPlayersInServerBrowser": "dPlayersInServerBrowser",
		"com.pa.DeathByDenim.dShowOffline": "dShowOffline",
		"com.pa.LavaSnake.Ant": "LavaSnakes_Ant",
		"com.pa.LavaSnake.CustomUnitNames": "LavaSnakes_CustomUnitNames",
		"com.pa.LavaSnake.CustomizableInGameTimers": "LavaSnakes_CustomInGameTimers",
		"com.pa.LavaSnake.ProfilePicFixer": "LavaSnakes_ProfilePicFixer",
		"com.pa.LavaSnake.StargateBugFix": "LavaSnakes_StargateBugFix",
		"com.pa.LavaSnake.StargateUnitNames": "LavaSnakes_StargateUnitNames",
		"com.pa.MushrooMars.MushroomarsRainbow": "MushroomarsRainbow",
		"com.pa.burntcustard.bAnchorButtons": "bAnchorButtons",
		"com.pa.burntcustard.bRemoveAlertPIPs": "bRemoveAlertPIPs",
		"com.pa.burntcustard.bShowSecondaryColour": "bShowSecondaryColour",
		"com.pa.burntcustard.bUITweaks": "bUITweaks",
		"com.pa.colacolin.Modbatch": "modbatch",
		"com.pa.conundrum.cDraggablePip": "cDraggablePip",
		"com.pa.conundrum.cEnhancedSystemPreview": "cEnhancedSystemPreview",
		"com.pa.conundrum.cGGButton": "cGGButton",
		"com.pa.conundrum.cLobbyRenamer": "cLobbyRenamer",
		"com.pa.conundrum.cPAStatsCharts": "cPAStatsCharts",
		"com.pa.conundrum.cPlanetNameThemes": "cPlanetNameThemes",
		"com.pa.conundrum.cPlanetPips": "cPlanetPips",
		"com.pa.conundrum.cShareSystems": "cShareSystems",
		"com.pa.conundrum.cSketchJS": "cSketchJS",
		"com.pa.conundrum.cTrackingPips": "cTrackingPips",
		"com.pa.danzel.dBetterSystemView": "dBetterSystemView",
		"com.pa.danzel.dReminderTimer": "dReminderTimer",
		"com.pa.danzel.teamspeak": "teamspeak",
		"com.pa.dementiurge.apd": "advancedplanetdetails",
		"com.pa.dementiurge.subduedbooster": "subduedorbitalbooster",
		"com.pa.gtc.gw_extended_system_moves": "gtcGWExtendedSystemMoves",
		"com.pa.mauru.mAdvancedSelect": "mAdvancedSelect",
		"com.pa.mauru.mEventHandler": "mEventHandler",
		"com.pa.mods.thirdparty.byAuthors.ZaphodX.and.iceDrop.circleToLine": "circleToLine",
		"com.pa.mods.yuuzhantar.lineToCircle": "lineToCircle",
		"com.pa.moldez.transicons": "transicons",
		"com.pa.nuketf.SupremeCommanderIcons": "SupremeCommanderIcons",
		"com.pa.proeleert.hotbuild2": "hotbuild2",
		"com.pa.raevn.pamm.ralertsfilter": "rAlertsFilter",
		"com.pa.raevn.pamm.rchronoclick": "rChronoClick",
		"com.pa.raevn.pamm.rsettingsmanager": "rSettingsManager",
		"com.pa.raevn.rChatPlayerColour": "rChatPlayerColour",
		"com.pa.raevn.rbiggerarmoryimages": "rBiggerArmoryImages",
		"com.pa.raevn.rblueprintinfoframework": "rBlueprintInfoFramework",
		"com.pa.raevn.rcommanderhp": "rCommanderHP",
		"com.pa.raevn.rfloatframe": "rFloatFrame",
		"com.pa.raevn.rmodslist": "rModsList",
		"com.pa.raevn.runitdatabase": "rUnitDatabase",
		"com.pa.rcix.teamBuildColor": "teamBuildColor",
		"com.pa.shalkka.sTeamNotes": "sTeamNotes",
		"com.pa.someonewhoisnobody.cheeseDevStage": "cheeseDevStage",
		"com.pa.someonewhoisnobody.inGameBrowser": "inGameBrowser",
		"com.pa.stuart98.alphaenergy": "alphaenergy",
		"com.pa.stuart98.anchorsfx": "anchorsfx",
		"com.pa.stuart98.jungletropical": "jungletropical",
		"com.pa.stuart98.metalbackground": "metalbackground",
		"com.pa.superouman.CustomSkybox": "CustomSkybox",
		"com.pa.superouman.HideFogOfWar": "HideFogOfWar",
		"com.pa.superouman.SpacedOutDefenceTowers": "SpacedOutDefenceTowers",
		"com.pa.tatsu.FAFicons": "FAFicons",
		"com.pa.tatsu.SCicons": "SCicons",
		"com.pa.trialq.eco_manager": "eco_manager",
		"com.pa.trialq.tAnnoyMe": "tAnnoyMe",
		"com.pa.trialq.tAutoFactory": "tAutoFactory",
		"com.pa.trialq.tBuildingWriter": "tBuildingWriter",
		"com.pa.trialq.tCustomBuildBar": "tCustomBuildBar",
		"com.pa.trialq.tDidYouKnow": "tDidYouKnow",
		"com.pa.trialq.tDoxCommMode": "tDoxCommMode",
		"com.pa.trialq.tGWDeck": "tGWDeck",
		"com.pa.trialq.tGWLoadout": "tGWLoadout",
		"com.pa.trialq.tGWSpeedHotfix": "tGWSpeedHotfix",
		"com.pa.trialq.tHideUberBar": "tHideUberBar",
		"com.pa.trialq.tSystemEditorFix": "tSystemEditorFix",
		"com.pa.vipez.vipeztrees": "VipezTrees",
		"com.pa.werty.wEconomyGraph": "wEconomyGraph",
		"com.pa.werty.wModPing": "wModPing",
		"com.pa.werty.wScriptSource": "wScriptSource",
		"com.pa.xedi.pixelicons": "PixelIcons",
		"com.uberent.pa.mods.client.teamlathecolor": "TeamLatheColor",
		"com.uberent.pa.mods.client.teamubercannoncolor": "TeamUberCannonColor",
		"com.uberent.pa.mods.stockmods.client.cheat.server_browser_show_cheat_servers": "server_browser_show_cheat_servers",
		"com.warren.pa.locate_commander": "locate_commander",
		"com.wondible.pa.acceptance": "acceptance",
		"com.wondible.pa.autoselect_commander": "autoselect_commander",
		"com.wondible.pa.fabulous_selections": "fabulous_selections",
		"com.wondible.pa.gross_economy": "gross_economy",
		"com.wondible.pa.hotkeyfix_cant_build": "hotkeyfix_cant_build",
		"com.wondible.pa.reconnect_button": "reconnect_button",
		"com.wondible.pa.sandbox_biome": "sandbox_biome",
		"com.wondible.pa.sandbox_unit_toolbox": "sandbox_unit_toolbox",
		"com.wondible.pa.simplified_sun_shader": "simplified_sun_shader",
		"com.wondible.pa.two_color_icons": "two_color_icons",
		"com.wondible.pa.version_warning_once": "version_warning_once",
		"com.wondible.pa.yellow_synchronous": "yellow_synchronous",
		"de.lostmekkasoft.dinosaurfix": "dinosaurfix",
		"fr.mereth.pa.allgames": "mereth.allgames",
		"fr.mereth.pa.mereth.replay": "mereth.replay",
		"fr.mereth.pa.startingplanet": "mereth.startingplanet",
		"fr.mereth.pa.twentyfour": "mereth.twentyfour",
		"info.nanodesu.EcoEffv2": "EcoEffv3",
		"info.nanodesu.alertsmanager": "alertsManager",
		"info.nanodesu.kodef": "kodef",
		"info.nanodesu.nScreens": "nScreens",
		"info.nanodesu.pastats": "pa_stats_online",
		"info.nanodesu.scaleui": "scale-ui",
		"local.pownie.pamod.failtolobby": "powReturnToServerBrowser",
		"local.pownie.pamod.twitchonstart": "powTwitchOnStart",
		"net.orfjackal.pa-build-power": "BuildPower",
		"net.orfjackal.pa-mentor": "PAMentor",
		"net.orfjackal.pa-spectator-vision": "SpectatorVision",
		"net.sirscruff.sirHighlightedBuildings": "sirHighlightedBuildings",
		"nl.jordev.favCommander": "favCommander",
		"nl.jordev.tauntmod": "tauntMod",
		"pa.wondible.missile_command": "missile_command",

		"pa.wondible.instant_sandbox": "instant_sandbox",
		"com.wondible.pa.instant_sandbox": "instant_sandbox"
	};

	var mappingId = {
		"cliffPlanetsAE": "com.aevns.acliffplanets",
		"pa_strat_build_icons": "com.elu.pa_strat_build_icons",
		"MouseFix": "com.pa.DeathByDenim.MouseFix",
		"dFavouriteColour": "com.pa.DeathByDenim.dFavouriteColour",
		"dNotes": "com.pa.DeathByDenim.dNotes",
		"dPlayersInServerBrowser": "com.pa.DeathByDenim.dPlayersInServerBrowser",
		"dShowOffline": "com.pa.DeathByDenim.dShowOffline",
		"LavaSnakes_Ant": "com.pa.LavaSnake.Ant",
		"LavaSnakes_CustomUnitNames": "com.pa.LavaSnake.CustomUnitNames",
		"LavaSnakes_CustomInGameTimers": "com.pa.LavaSnake.CustomizableInGameTimers",
		"LavaSnakes_ProfilePicFixer": "com.pa.LavaSnake.ProfilePicFixer",
		"LavaSnakes_StargateBugFix": "com.pa.LavaSnake.StargateBugFix",
		"LavaSnakes_StargateUnitNames": "com.pa.LavaSnake.StargateUnitNames",
		"MushroomarsRainbow": "com.pa.MushrooMars.MushroomarsRainbow",
		"bAnchorButtons": "com.pa.burntcustard.bAnchorButtons",
		"bRemoveAlertPIPs": "com.pa.burntcustard.bRemoveAlertPIPs",
		"bShowSecondaryColour": "com.pa.burntcustard.bShowSecondaryColour",
		"bUITweaks": "com.pa.burntcustard.bUITweaks",
		"modbatch": "com.pa.colacolin.Modbatch",
		"cDraggablePip": "com.pa.conundrum.cDraggablePip",
		"cEnhancedSystemPreview": "com.pa.conundrum.cEnhancedSystemPreview",
		"cGGButton": "com.pa.conundrum.cGGButton",
		"cLobbyRenamer": "com.pa.conundrum.cLobbyRenamer",
		"cPAStatsCharts": "com.pa.conundrum.cPAStatsCharts",
		"cPlanetNameThemes": "com.pa.conundrum.cPlanetNameThemes",
		"cPlanetPips": "com.pa.conundrum.cPlanetPips",
		"cShareSystems": "com.pa.conundrum.cShareSystems",
		"cSketchJS": "com.pa.conundrum.cSketchJS",
		"cTrackingPips": "com.pa.conundrum.cTrackingPips",
		"dBetterSystemView": "com.pa.danzel.dBetterSystemView",
		"dReminderTimer": "com.pa.danzel.dReminderTimer",
		"teamspeak": "com.pa.danzel.teamspeak",
		"advancedplanetdetails": "com.pa.dementiurge.apd",
		"subduedorbitalbooster": "com.pa.dementiurge.subduedbooster",
		"gtcGWExtendedSystemMoves": "com.pa.gtc.gw_extended_system_moves",
		"mAdvancedSelect": "com.pa.mauru.mAdvancedSelect",
		"mEventHandler": "com.pa.mauru.mEventHandler",
		"circleToLine": "com.pa.mods.thirdparty.byAuthors.ZaphodX.and.iceDrop.circleToLine",
		"lineToCircle": "com.pa.mods.yuuzhantar.lineToCircle",
		"transicons": "com.pa.moldez.transicons",
		"SupremeCommanderIcons": "com.pa.nuketf.SupremeCommanderIcons",
		"hotbuild2": "com.pa.proeleert.hotbuild2",
		"rAlertsFilter": "com.pa.raevn.pamm.ralertsfilter",
		"rChronoClick": "com.pa.raevn.pamm.rchronoclick",
		"rSettingsManager": "com.pa.raevn.pamm.rsettingsmanager",
		"rChatPlayerColour": "com.pa.raevn.rChatPlayerColour",
		"rBiggerArmoryImages": "com.pa.raevn.rbiggerarmoryimages",
		"rBlueprintInfoFramework": "com.pa.raevn.rblueprintinfoframework",
		"rCommanderHP": "com.pa.raevn.rcommanderhp",
		"rFloatFrame": "com.pa.raevn.rfloatframe",
		"rModsList": "com.pa.raevn.rmodslist",
		"rUnitDatabase": "com.pa.raevn.runitdatabase",
		"teamBuildColor": "com.pa.rcix.teamBuildColor",
		"sTeamNotes": "com.pa.shalkka.sTeamNotes",
		"cheeseDevStage": "com.pa.someonewhoisnobody.cheeseDevStage",
		"inGameBrowser": "com.pa.someonewhoisnobody.inGameBrowser",
		"alphaenergy": "com.pa.stuart98.alphaenergy",
		"anchorsfx": "com.pa.stuart98.anchorsfx",
		"jungletropical": "com.pa.stuart98.jungletropical",
		"metalbackground": "com.pa.stuart98.metalbackground",
		"CustomSkybox": "com.pa.superouman.CustomSkybox",
		"HideFogOfWar": "com.pa.superouman.HideFogOfWar",
		"SpacedOutDefenceTowers": "com.pa.superouman.SpacedOutDefenceTowers",
		"FAFicons": "com.pa.tatsu.FAFicons",
		"SCicons": "com.pa.tatsu.SCicons",
		"eco_manager": "com.pa.trialq.eco_manager",
		"tAnnoyMe": "com.pa.trialq.tAnnoyMe",
		"tAutoFactory": "com.pa.trialq.tAutoFactory",
		"tBuildingWriter": "com.pa.trialq.tBuildingWriter",
		"tCustomBuildBar": "com.pa.trialq.tCustomBuildBar",
		"tDidYouKnow": "com.pa.trialq.tDidYouKnow",
		"tDoxCommMode": "com.pa.trialq.tDoxCommMode",
		"tGWDeck": "com.pa.trialq.tGWDeck",
		"tGWLoadout": "com.pa.trialq.tGWLoadout",
		"tGWSpeedHotfix": "com.pa.trialq.tGWSpeedHotfix",
		"tHideUberBar": "com.pa.trialq.tHideUberBar",
		"tSystemEditorFix": "com.pa.trialq.tSystemEditorFix",
		"VipezTrees": "com.pa.vipez.vipeztrees",
		"wEconomyGraph": "com.pa.werty.wEconomyGraph",
		"wModPing": "com.pa.werty.wModPing",
		"wScriptSource": "com.pa.werty.wScriptSource",
		"PixelIcons": "com.pa.xedi.pixelicons",
		"TeamLatheColor": "com.uberent.pa.mods.client.teamlathecolor",
		"TeamUberCannonColor": "com.uberent.pa.mods.client.teamubercannoncolor",
		"server_browser_show_cheat_servers": "com.uberent.pa.mods.stockmods.client.cheat.server_browser_show_cheat_servers",
		"locate_commander": "com.warren.pa.locate_commander",
		"acceptance": "com.wondible.pa.acceptance",
		"autoselect_commander": "com.wondible.pa.autoselect_commander",
		"fabulous_selections": "com.wondible.pa.fabulous_selections",
		"gross_economy": "com.wondible.pa.gross_economy",
		"hotkeyfix_cant_build": "com.wondible.pa.hotkeyfix_cant_build",
		"reconnect_button": "com.wondible.pa.reconnect_button",
		"sandbox_biome": "com.wondible.pa.sandbox_biome",
		"sandbox_unit_toolbox": "com.wondible.pa.sandbox_unit_toolbox",
		"simplified_sun_shader": "com.wondible.pa.simplified_sun_shader",
		"two_color_icons": "com.wondible.pa.two_color_icons",
		"version_warning_once": "com.wondible.pa.version_warning_once",
		"yellow_synchronous": "com.wondible.pa.yellow_synchronous",
		"dinosaurfix": "de.lostmekkasoft.dinosaurfix",
		"mereth.allgames": "fr.mereth.pa.allgames",
		"mereth.replay": "fr.mereth.pa.mereth.replay",
		"mereth.startingplanet": "fr.mereth.pa.startingplanet",
		"mereth.twentyfour": "fr.mereth.pa.twentyfour",
		"EcoEffv3": "info.nanodesu.EcoEffv2",
		"alertsManager": "info.nanodesu.alertsmanager",
		"kodef": "info.nanodesu.kodef",
		"nScreens": "info.nanodesu.nScreens",
		"pa_stats_online": "info.nanodesu.pastats",
		"scale-ui": "info.nanodesu.scaleui",
		"powReturnToServerBrowser": "local.pownie.pamod.failtolobby",
		"powTwitchOnStart": "local.pownie.pamod.twitchonstart",
		"BuildPower": "net.orfjackal.pa-build-power",
		"PAMentor": "net.orfjackal.pa-mentor",
		"SpectatorVision": "net.orfjackal.pa-spectator-vision",
		"sirHighlightedBuildings": "net.sirscruff.sirHighlightedBuildings",
		"favCommander": "nl.jordev.favCommander",
		"tauntMod": "nl.jordev.tauntmod",
		"missile_command": "pa.wondible.missile_command",

		"instant_sandbox": "com.wondible.pa.instant_sandbox"
	};

	var toIdentifier = function(id) {
		return mappingId[id];
	};

	var toId = function(identifier) {
		return mappingIdentifier[identifier];
	};

	var push = function(identifier, id) {
		mappingIdentifier[identifier] = id;
		mappingId[id] = identifier;
	}

	exports.toIdentifier = toIdentifier;
	exports.toId = toId;
	exports.push = push;
})();

var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Overview","text":"<p>This is a set of notes on building the BBox printer. It is a work in progress and constructive feedback is always appreciated. </p> <p>We have a BBox discord channel. You may need to use this invite to the Delayed Development discord server to access that channel.</p> <p>Please check out the sidebar on the left (pull it down if you have to in case it is collapsed) and browse the various sections I've compiled thus far.</p> <p>Note: The BBox is currently in a closed beta. This is to allow us to be able to have a more controlled back and forth regarding feedback and adjustments to help improve the BBox project so that it can be more broadly shared with an open beta, and then hopefully a general release.</p> <p>Thank you for your interest in my BBox project, Sakitume (Sock it to me) My YouTube channel</p>"},{"location":"index.html#what-is-the-bbox","title":"What is the BBox?","text":"<p>The BBox started off as a personal project. The first few protoypes were \"BBox180\" printers meaning they had a 180x180x180 build volume. The BBox180 is a small(ish), enclosed CoreXY printer with good performance characteristics. The main features are:</p> <ul> <li>CoreXY motion system</li> <li>Support for either dual leadscrews or dual belts for Z-drive</li> <li>Support for either linear rods or linear rail for X-axis</li> <li>Enclosed (but you don't have to if you don't want to)<ul> <li>This lets you easily print ABS and ASA type materials with great results</li> </ul> </li> <li>Printer filament is stored within the enclosure<ul> <li>Helps keep the filament stay dray during printing</li> </ul> </li> <li>Very simple but efficient toolhead<ul> <li>Uses Sherpa Mini extruder<ul> <li>A well proven design with mods/variants to make it easier to adapt an MMU such as the Basic4 or ERCF</li> </ul> </li> <li>Optionally, you could use a remote BMG type extruder with a bowden tube to the hotend<ul> <li>I ran a BBox180 like this for quite a while with very good results</li> </ul> </li> <li>Utilizes clone Bambu Labs X1C hotend for an excellent performance to cost ratio<ul> <li>Uses CHC style nozzle </li> </ul> </li> <li>Uses single 5015 fan with \"Claw\" duct for excellent part cooling performance</li> </ul> </li> <li>Excellent visibility to what you're printing<ul> <li>LED lighting with white interior panels make everything easy to see</li> <li>No belts or extrusion at front of the printer to get in the way</li> <li>Claw duct does not obscure the area around the nozzle so you see exactly how things are laying down</li> </ul> </li> <li>Scalable design, can be built as large or small as you wish within reason</li> <li>Unique motor and belt path that is directly inspired from the one in Tim Wieder's CoreCubeXY project. While similar to Voron V0 belt path it is not quite the same as the belt teeth face the back of the printer (mount against the X carriage).<ul> <li>No belts in front of the printer</li> <li>Uses a total of 10 pulleys. This is at least 2 less than most other printers.</li> </ul> </li> </ul> <p>Here's the original BBox180 prototype that I shared on YouTube mid 2023. </p> <p>That prototype utilized a variety of pre-existing parts and designs that allowed me to test my ideas out. I am super appreciative of the very talented people who shared their work. Perhaps by sharing my BBox design I can also give back a little to the community.</p> <p>Since that initial prototype I have designed my own custom parts using Fusion360 for the BBox. Doing this allowed me to level up my (limited) CAD skills. I was also able to develop alternate X-axis and Z-axis motion systems. And more importantly, building my own parts allowed me to re-implement the belt pathing found in Tim Wieder's CoreCubeXY project and adapt it into the BBox. But mostly, by building my own custom designed parts, I was able to develop the BBox to be as simple and basic as I wanted.</p> <p>Here's a video short I made of the linear rail variant of the BBox </p> <p>Below are some pics from Oct 2023 of two of my BBox 180 printers. The one on the left was the original prototype but rebuilt using all newly designed parts for the X/Y motion system. Like the original prototype, this rebuild uses linear rods for the X-axis. However the BBox on the right  uses an MGN12C linear rail for the X-axis. Also the BBox on the left uses an axle driven dual-belted Z (single motor) for the Z-axis while the BBox on the right uses dual leadscrews (two motors). This is a good example of how the BBox is more of a platform rather than a specific printer design. Use what you prefer, or what you can based on the parts you have available (hint: using a donor printer like a KP3S or Ender 3 is a great way to build a BBox).</p> <p></p> <p>Speaking of donors.....using an existing printer such as a KP3S or an Ender 3 style printer is an excellent and cost effective way to build a BBox. With the KP3S you can build a BBox180, with an Ender 3 type printer you can build a BBox235, etc. While you can certainly build a BBox from scratch, using a donor printer will save you some money as well as speed up the build process.</p> <p>In the picture above, the BBox180 on the left used a BMG clone extruder coupled with a bowden tube to the hotend. The BBox180 on the right used a Sherpa mini direct drive extruder. Both are options that provide very good performance. But for higher speeds (250mms) the BMG clone wasn't able to keep up, probably related to the much higher pressure advance that a bowden system requires versus direct drive. I later switched that printer over to also use a Sherpa mini direct drive extruder.</p>"},{"location":"doc-updates.html","title":"Doc Updates","text":"<p>As I work on this documentation I will try to list the major changes/updates that occur</p> <ul> <li>3/26/2024<ul> <li>Added this Doc Updates section</li> <li>The What you'll need section was updated<ul> <li>Replaced the clunky markdown table that was used for the BOM with an embedded Google Sheet as well as a clickable link to the sheet</li> <li>Added a \"deburring tool\" as a suggested tool</li> </ul> </li> <li>The The sizes of things section was updated<ul> <li>A description for the MGN12C rail was added</li> <li>A description for the T-platform was added</li> </ul> </li> </ul> </li> </ul>"},{"location":"sidebar/build-overview.html","title":"Before you start","text":""},{"location":"sidebar/build-overview.html#what-you-need-to-know-before-building","title":"What you need to know before building","text":"<p>The BBox is not terribly difficult to build. In some ways I think it may be easier than many CoreXY printers. However it still requires a bit of thinking, troubleshooting and problem solving in order to successfully build a BBox that will perform well.</p> <p>In some ways the BBox is more of a platform rather than a single printer design. You can mix and match different components of the BBox design to match the parts you have or the design that you wish. Specifically this means you can choose between having an X-axis that uses an MGN12C rail, or an X-axis that uses two 8mm linear rods. Another example is that you can use either double-leadscrews for the Z-axis, or an axle driven dual-belted Z-drive. More on the Z drive options in a later section. For now lets focus on the X-axis options.</p>"},{"location":"sidebar/build-overview.html#linear-rods-for-x-axis","title":"Linear rods for X axis","text":"<p>This variant works very well and lets you build any size of the BBox (along X). I have built a BBox235 and a BBox180 using rods with good performance characterstics.</p> <p>Using linear rods for X will require you have the ability to cut these to a specific length. Or be able to purchase them to a specific length. I find it easy to cut 8mm linear rods to length using an angle grinder with a cutoff wheel. NOTE: You cannot cut linear rods with a hacksaw. A tool with an abrasive wheel is required</p> <p> </p> <p>So please keep this in mind. If you are unable to cut (or purchase pre-cut) linear rods to a specific length, this project may not be for you.</p>"},{"location":"sidebar/build-overview.html#mgn12c-for-x-axis","title":"MGN12C for X axis","text":"<p>There is another variant of the BBox that uses an MGN12C linear rail for the X-axis. There are some pros and cons to this option.</p> <p>The pros:</p> <ul> <li>The X axis becomes quite a bit simpler to build and assemble (less parts)</li> <li>You will have one of these rails if using a KP3S (or KP3S Pro) donor</li> </ul> <p>The cons:</p> <ul> <li>The length of the horizontal 2020 extrusions (for X) must be exactly 70mm or 75mm longer than your MGN12C rail.<ul> <li>This isn't necessarily a bad thing, it just means you can't make it extra wide for some reason</li> <li>So for a BBox180 using a 225mm MGN12C your horizontal extrusions must be either 295mm or 300mm long. </li> <li>If using a 250mm MGN12C then your horizontal extrusions must be either 320mm or 325mm long<ul> <li>Pre-cut 320mm extrusion seems to be readily available on Amazon, but I don't see any listings for pre-cut 325mm</li> </ul> </li> </ul> </li> </ul>"},{"location":"sidebar/build-overview.html#printing-parts","title":"Printing Parts","text":"<p>If you are going to make an enclosed BBox (highly recommended but not necessary) then it is strongly advised to print the BBox parts in either ABS or ASA. I have used both materials and the fitment, strength and heat tolerance are known to work well. Printing the parts in PETG is not recommended. Printing in PLA might be okay if it won't be enclosed but you'll likely need to reduce the run current on your stepper motors so they run cooler than normal and don't warp/melt the plastic motor mounts. Its best to run \"normal\" current rather than lower current on the steppers for best performance and print quality.</p> <p>I've heard on the Delayed Discord server that some ASA can be printed open-air with fairly good results (as long as you don't have drafts). You can also use a cardboard box or a printer tent/enclosure to enclose your printer (such as an Ender 3) to print out the BBox parts in ABS/ASA. This is what I did for my first BBox prototype.</p>"},{"location":"sidebar/build-overview.html#heatset-inserts","title":"Heatset inserts","text":"<p>Some of the parts will require the use of heatset inserts. They are pretty easy and straightforward to install into the BBox parts.</p> <p></p>"},{"location":"sidebar/build-overview.html#electronics-klipper-and-related","title":"Electronics, Klipper, and related","text":"<p>Using an existing 3D printer as a donor will give you most of the electrical/electronic parts you'll need. The original BBox prototype was made using a Kingroon KP3S printer for parts. Alternatively you can self source all of the various parts needed; this is actually a pretty good option as well.</p> <p>If using a KP3S or KP3S Pro as a donor, I will show you how to bridge a few solder pads on the mainboard so that you can easily configure the run current of your stepper drivers so that you can tune the run current of the steppers using Klipper. </p> <p></p> <p>The KP3S/KP3S Pro mainbaord uses TMC 2208 stepper drivers. These drivers don't support sensorless homing (which is perfectly fine), this means you will want to re-use the mechanical endstop switches from the KP3S.</p> <p>If you're using a mainboard that has the TMC 2209 drivers (like the SKR Pico) then you can use sensorless homing for X and Y if you wish, however Z will still use a mechanical endstop at the bottom.</p>"},{"location":"sidebar/build-overview.html#klipper","title":"Klipper","text":"<p>The BBox was designed to work with Klipper firmware. There is no support for Marlin, RepRap, etc. This means you'll need a Klipper host computer board, usually a Raspberry Pi. I've never used a Raspberry Pi for my printers as I've always had cheaper alternatives on hand (some Rockchip single board computers, or re-purposed Chromeboxes, or Orange Pi, etc). </p>"},{"location":"sidebar/printing-parts.html","title":"Printing the parts","text":"<p>As previously mentioned, it is recommended to print the BBox parts with ABS or ASA filament. This should be done with an enclosed printer when possible. However it may be possible to print the parts in open air using some brands of ASA if you don't have drafts (or can rig up a simple draft shield).</p> <p>If you decide not to enclose your BBox then it should be possible to print the parts with PLA. During the early prototype stages of development I made many versions of the parts using PLA and they seemed to be okay. The only area of concern I would have is that the motor mounts will deform when the motors get hot. To prevent that you can dial down the run current so they don't get warm, but that will affect performance and possibly quality.  It may be possible to print (just these) parts in PETG for their higher heat tolerance but I've heard that  PETG can deform over time due to load/stress. I don't know if that would occur or not.</p>"},{"location":"sidebar/printing-parts.html#profile-settings","title":"Profile settings","text":"<p>Generally I like to print fast so I can test out my parts. This led me to using the following printing parameters when I developed the BBox parts. They gave me the strength I needed and also shortened the print times by a little compared to using Voron style print settings. So think of these as minimum settings; you can add more layers/walls or increase the infill, etc.</p> <ul> <li>0.2mm layer height</li> <li>0.5mm line width</li> <li>4 walls, 4 top layers, 4 bottom layers</li> <li>15% infill density</li> <li>No supports needed</li> </ul> <p>You can also use the Voron style print settings which are similar:</p> <ul> <li>0.2mm layer height</li> <li>Forced 0.4mm extrusion width</li> <li>4 walls, 5 layers for top, 5 layers for bottom</li> <li>40% infill</li> <li>No supports needed</li> </ul> <p>Or you could go the opposite direction and use a 0.25mm layer height for some parts to shorten the print time. Do what makes you happy.</p>"},{"location":"sidebar/printing-parts.html#choosing-which-stl-files-to-print","title":"Choosing which STL files to print","text":"<p>You'll need to decide if you'll be using the linear rod or linear rail variant of the BBox. The stl files for both variants can be found in separate folders. So you can ignore the folders that don't apply.</p> <p>Similarly, you can choose between the axle driven dual-belted Z-drive or the dual leadscrew Z-drive. The parts for these two variants will also be in their respective folders. So only print the parts that apply to your choice.</p> <p>Later on in this document I'll list out the folder names, the list of <code>.stl</code> files in the folder, and what the parts are used for. This way you can decide which folder(s) to use and which to ignore as well as the orientation of the parts when printing.</p> <p>Note: Some of the <code>.stl</code> files are meant to be printed more than once. These parts will have a suffix in their name like <code>ZBearingClamp_x3.stl</code>. In this example the <code>_x3</code> means you'll need to print 3 copies of this part.</p>"},{"location":"sidebar/printing-parts.html#printed-parts-used-for-a-bbox235-that-uses-linear-rods-for-x-axis","title":"Printed parts used for a BBox235 that uses linear rods for X axis","text":""},{"location":"sidebar/printing-parts.html#build-plate-pics","title":"Build plate pics","text":"<p>The following section shows the print orientation you should use for each part. The arrangement of some of the parts in these build plates were adjusted to make things easier to see and may not be the best arrangement for printing.</p> <p>The build plates show the <code>.stl</code> parts for a specific folder. The folder name and the list of <code>.stl</code> part files within it are listed before each build plate. </p>"},{"location":"sidebar/printing-parts.html#folder-xymotionmotorassembly","title":"Folder: XYMotion/MotorAssembly","text":"<p>Always print this. Used by all variants of the BBox</p> <ul> <li>MotorAssemblyLeft.stl</li> <li>MotorAssemblyRight.stl</li> <li>MotorAssemblyRodClamp_x2.stl</li> <li>PulleySpacer_x2.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-xymotionfrontidlers","title":"Folder: XYMotion/FrontIdlers","text":"<p>Always print this. Used by all variants of the BBox. These are the front idlers of the CoreXY motion system.</p> <ul> <li>FrontIdlerLeftLower.stl</li> <li>FrontIdlerLeftUpper.stl</li> <li>FrontIdlerRightLower.stl</li> <li>FrontIdlerRightUpper.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-toolhead","title":"Folder: Toolhead","text":"<p>Always print this. Used by all variants of the BBox. These parts comprise the toolhead.</p> <p></p>"},{"location":"sidebar/printing-parts.html#folder-xymotionxrodjoiners","title":"Folder: XYMotion/XRod/Joiners","text":"<p>These parts should only be printed if you're using the linear rods for x-axis variant. These parts form the section of the gantry that join the X-axis to slide along the Y-axis.</p> <ul> <li>EndStopBumperLeft.stl</li> <li>EndStopBumperRight.stl</li> <li>PulleySpacer_x2.stl</li> <li>XYJoinerXRodBottomLeft.stl</li> <li>XYJoinerXRodBottomRight.stl</li> <li>XYJoinerXRodLeft.stl</li> <li>XYJoinerXRodRight.stl</li> <li>XYJoinerXRodTopLeft.stl</li> <li>XYJoinerXRodTopRight.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-xymotionxrodcarriage","title":"Folder: XYMotion/XRod/Carriage","text":"<p>These parts should only be printed if you're using the linear rods for x-axis variant. These pieces form the X-carriage that the toolhead will attach to.</p> <p></p>"},{"location":"sidebar/printing-parts.html#folders-xymotionxrailjoiners-and-xymotionxrailcarriage_basic","title":"Folders: XYMotion/XRail/Joiners and XYMotion/XRail/Carriage_Basic","text":"<p>These parts should only be printed if you're using the MGN12C linear rail for x-axis variant. The parts in <code>XYMotion/XRail/Joiners</code> form the section of the gantry that join the X-axis to slide along the Y-axis. The parts in <code>XYMotion/XRail/Carriage_Basic</code> form the X-carriage that the toolhead will attach to.</p> <p>Note: There is also an <code>XYMoton/XRail/Carriage_DragonBurner</code> folder with carriage parts that may work with Voron DragonBurner toolhead. These are still a work in progress and have only been briefly tested.</p> <p></p>"},{"location":"sidebar/printing-parts.html#folder-zdrive_beltedaxledrive","title":"Folder: ZDrive_Belted/AxleDrive","text":"<p>These parts should only be printed if you're using the dual-belted Z-drive variant.</p> <ul> <li>AxleBearingSupport_x2.stl</li> <li>Z_Motor_Mount.stl</li> <li>ZIdlerPulley_x2.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-zdrive_platform","title":"Folder: ZDrive_Platform","text":"<p>Always print this. Used by all BBox variants. The corner clamp parts are used to form the T platform while the other parts are used to support the motion of that platform up and down the Z axis. The printer bed will mount onto this T platform.</p> <ul> <li>CornerClamp_40mm_x2.stl</li> <li>ZBearingClamp_x3.stl</li> <li>ZRodClampAligned_x6.stl</li> <li>ZSwitchMountOneSided.stl</li> <li>ZSwitchPlate.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-zdrive_beltedclamps","title":"Folder: ZDrive_Belted/Clamps","text":"<p>These parts should only be printed if you're building the dual-belted Z-drive variant. These are the parts that clamp the ends of each belt and the mounts that attach the clamp the T platform.</p> <ul> <li>ClampMountParallel_Heatsets.stl</li> <li>ClampMountParallel_SquareNuts.stl</li> <li>ClampMountPerpendicular.stl</li> <li>SlidingClamp_Parallel.stl</li> <li>SlidingClamp_Perpendicular.stl</li> <li>StationaryClamp_Parallel.stl</li> <li>StationaryClamp_Perpendicular.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-zdrive_leadscrew","title":"Folder: ZDrive_LeadScrew","text":"<p>These parts should only be printed if you're building the dual leadscrew variant</p> <ul> <li>LeadScrewNutMount.stl</li> <li>LeadScrewNutMountOffset.stl</li> <li>ZMotorMount_x2.stl</li> </ul> <p></p>"},{"location":"sidebar/printing-parts.html#folder-toolhead-bambux1_v6stl-only","title":"Folder: Toolhead - BambuX1_V6.stl only","text":"<p>Always print this part. It is used by all variants of the BBox.  This part is used to adapt a clone Bambu Labs X1C hotend to the V6 (J-Head) hotend mount. This is the only part where supports (on build plate only) are recommended. If you print  very slow you might not need the supports. You will want to prevent supports from being generated in/around the \"block\" area of the adapter. </p> <ul> <li>BambuX1_V6.stl </li> </ul>"},{"location":"sidebar/sizing.html","title":"The sizes of things","text":"<p>As mentioned previously, the BBox is scalable. This means you can build it as small or as large as you want (along any dimension) within reason. This means the size of the frame, and the linear rods can vary depending on what you want. Typically these dimensions will be based on the size of the bed you'll be using as well as the build height you wish to have. </p> <p>Do you remember when I said you'll need to think a little as you'll have options to consider? You'll soon see why I said that.</p>"},{"location":"sidebar/sizing.html#sizing-the-horizontal-members-of-the-frame","title":"Sizing the horizontal members of the frame","text":"<p>To be able to fully utilize the entire bed a minimum length of horizontal extrusions (for the frame) needs to be met. If your bed is square like the ones that a KP3S donor or Ender 3 can provide, then the horizontal extrusions can all be the same size. Not only does this make things easier (to either purchase or cut), it also gives you just enough room in the back side of the enclosure to store your spool of filament while printing.</p> <p>Note: You can go larger than the minimum should you desire some extra space, but there's usually about 10 or 15mm of free space at the back of the Y axis when using the minimum. This should be enough for a purge or nozzle wipe area, or a klicky probe mount, etc.</p>"},{"location":"sidebar/sizing.html#sizing-along-x","title":"Sizing along X","text":"<p>I could just say, \"if using a 180mm build plate then horizontal extrusions should be exactly 300mm in length\" or \"if using a 235mm build plate use 350mm horizontal extrusion\". But instead I'm going to give you the reason why that's not entirely true so that you can adjust as you wish.</p>"},{"location":"sidebar/sizing.html#if-using-an-mgn12c-rail-for-the-x-axis","title":"If using an MGN12C rail for the X-axis","text":"<p>When using an MGN12C rail for the X-axis the length of your horizontal extrusions must be either 70mm or 75mm longer than your rail. For example, the MGN12C rail found on a KP3S is 225mm long. So your horizontal extrusion will be either 295mm or 300mm in length. It's pretty easy to find pre-cut lengths of 2020 extrusion that is 300mm in length. I cut my own extrusions to length (more about this later) so I used 295mm for my BBox180 printers. This allowed me to use 16\"x20\" plexiglass panels for the front door without having to cut the panel and also have the panel overlap the extrusions by about 4.5mm on each side. If I had used pre-cut 300mm extrusions these 16\"x20\" panels would still have a little bit of overlap, around 2mm on each side.</p> <p>Note: At this time the current X/Y joiner parts are designed so that you'd use the \"70mm longer than rail\" length. I will either make another variant of these parts for the \"75mm longer\" or adjust these parts so they can be used for either case.</p>"},{"location":"sidebar/sizing.html#if-using-linear-rods-for-the-x-axis","title":"If using linear rods for the X-axis","text":"<p>If you choose to use linear rods for the X-axis then the length of your horizontal extrusions must be either 115mm or 120mm longer than your bed width. For my BBox180 using linear rods I chose (again) to use extrusions that were 295mm in length (180 + 115). But as described earlier I could have used 300mm instead.</p> <p>For the BBox235 that I built, I used 350mm length extrusions (235 + 115).</p>"},{"location":"sidebar/sizing.html#sizing-the-linear-rail-or-linear-rods-for-the-x-axis","title":"Sizing the linear rail or linear rods for the X-axis","text":"<p>As previously mentioned the BBox can use either two linear rods or a single MGN12C linear rail for the X-axis motion. If using a KP3S donor then the MGN12C variant is an ideal choice.</p>"},{"location":"sidebar/sizing.html#sizing-the-mgn12c-linear-rail-for-the-x-axis","title":"Sizing the MGN12C linear rail for the X-axis","text":"<p>This applies only if using the linear rail for X-axis variant.  </p> <p>This variant has only been tested with a 225mm MGN12C that was pulled from a KP3S donor printer. The 180x180 bed from the KP3S was also used. By using these two parts together the full 180mm length of the bed were usable. </p> <p>So generally speaking the MGN12C should be 45mm longer than the length of the printer bed (along X axis).</p> <p>Note: The KP3S Pro uses 250mm rails and advertises a build volume of 200x200x200, however the bed is actually 210x210 in dimension. So if you are using a KP3S Pro as a donor it is possible your usable build space may end up being 205x205 along X/Y (or even more). This has yet to be confirmed.</p>"},{"location":"sidebar/sizing.html#sizing-the-linear-rods-for-the-x-axis","title":"Sizing the linear rods for the X-axis","text":"<p>This applies only if using the linear rods for X-axis variant.  </p> <p>The two rods used for the X-axis will need to be cut to a specific length based on the length of horizontal extrusion you decided upon. And if that wasn't enough, one of these two rods needs to be just a few mm shorter than the other. The top rod needs to be 8mm shorter than your horizontal extrusion and the bottom rod needs to be 5mm shorter than the horizontal extrusion.</p> <p>You could just cut them to the same length (the shorter of the two). That should be okay as well.</p> <p>For example on my BBox235 using 350mm horizontal extrusion I used 342mm for the top rod and 345mm for the bottom rod.</p>"},{"location":"sidebar/sizing.html#sizing-the-rods-for-the-y-axis","title":"Sizing the rods for the Y-axis","text":"<p>All variants of the BBox will use linear rods for the Y-axis. The length of these rods depends on the length of your horizontal extrusions that go along the Y direction. Normally these extrusions are the same length as the horizontal ones that go along the X direction, but if they're different then use the length of your Y axis extrusions for the following calculation. The length of these two rods should be 15mm less than your horizontal extrusions.</p> <p>For example if your building a BBox235 with 350mm length horizontal extrusions then your Y rods will be 335mm in length (350 - 15).</p>"},{"location":"sidebar/sizing.html#sizing-the-vertical-members-of-the-frame","title":"Sizing the vertical members of the frame","text":"<p>The four vertical upright members of the frame should be a minimum of 100mm longer than your horizontal extrusions. If you can go another 20mm or 100mm longer than you'll have more space for the reverse bowden tube and wire harness (leading to the extruder) to comfortably travel within.</p> <p>With my BBox180 printers using 295mmm horizontal extrusions I used 400mm length extrusions for my vertical uprights.</p> <p>Note: If you can cut your own extrusions, you can purchase 1m lengths that you cut two sections out of, each section being 295mm (or 300mm) long. The left over piece of that 1m length is now approximately 400mm. Do this a total of 4 times and you'll end up with 8 horizontal and 4 vertical members. Then cut one more 1m length into 3 sections for the remaining horizontal extrusions (you need a total of 11 of them). This is a very efficient way to build your frame with little waste along with lower cost.</p>"},{"location":"sidebar/sizing.html#sizing-the-linear-rods-used-for-the-z-axis","title":"Sizing the linear rods used for the Z-axis","text":"<p>These 3 rods should be same length as your horizontal extrusions. So if you're using 300mm horizontal extrusions for a BBox180 then these 3 rods will also be 300mm in length. If using 350mm horizontal extrusion for a BBox235 then you'll want linear rods that are 350mm in length.</p>"},{"location":"sidebar/sizing.html#sizing-the-extrusion-used-for-the-t-platform-of-the-z-axis","title":"Sizing the extrusion used for the T-platform of the Z-axis","text":"<p>Note: The Z-axis and this T-platform are the parts of the build that are the most nebulous or ambiguous. For the T-platform you could just buy two extra pieces of extrusion that are the same length as your horizontal extrusions...and then be prepared to cut 30mm off of one of these. More about this later.</p> <p>Two lengths of 2020 extrusion are joined together to form a \"T\" shape. When looking at the front of the printer I normally have the T on its side so it looks something like this: <code>|---</code></p> <p></p> <p>In the picture above you can see the top part of the T already connected to two vertical linear rods. There is also another piece of 2020 extrusion that will be connected to this top part of the T.</p> <p>Generally speaking the top part of the T will be about 50mm longer than length of your bed. However it can be as long as your horizontal extrusions. I just use whatever scrap I happen to have on hand that is close enough.</p> <p>The other part of the T has a more specific dimension: it should be 30mm shorter than your horizontal extrusions. Only one end of this extrusion needs to be square (the end that connects to the top part of the <code>T</code>), so if are buying pre-cut extrusions that are \"standard\" or common lengths, you can just buy two additional pieces that are the same length as your horizontal extrusions and just cut one of them to be 30mm shorter using whatever method you have available (a hacksaw is fine) as the cut end doesn't need to be square and clean.</p>"},{"location":"sidebar/whats-needed.html","title":"What you'll need","text":"<p>You'll need patience at times, as well as perseverence. But know that you'll be rewarded. As stated earlier you will need to think through some things as the BBox isn't a project where every step is precisely layed out like a Lego kit. You will have options to choose from. So have fun!</p>"},{"location":"sidebar/whats-needed.html#a-list","title":"A list...","text":"<p>Okay...here is a higher level list of what you'll need.</p> <ul> <li>The ability to cut 8mm linear rods to length is absolutely necessary if you are using linear rods for X axis. The Y axis will also use linear rods for both BBox variants. It is also recommended to cut these 8mm linear rods as well but it might be possible to use full length rods (300mm for BBox180, 350mm for BBox235). I will describe this in more detail (with a video) soon.</li> <li>A way to print the BBox parts in ABS/ASA. If you aren't going to enclose the BBox then it should be okay to print with PLA. A few prototypes of the BBox180 used PLA just fine. It may also be possible to build a semi-enclosed BBox in PLA (don't use a top cover) and then reprint the parts in ABS/ASA and rebuild it or make another fully enclosed printer.</li> <li>A donor 3D printer is recommended to make the build go faster and easier but is not required. You can always source the parts individually.</li> <li>A single board computer of some kind to host Klipper. This is usually a Raspberry Pi. You can also modify a Chromebox or Chromebook or an old laptop to run linux; these work really well.</li> </ul>"},{"location":"sidebar/whats-needed.html#a-list-of-tools","title":"A list of tools","text":"<p>You'll want or need various tools</p> <ul> <li>A soldering iron or other way to install heated inserts. A soldering iron is pretty useful anyways should you need to bridge the solder pads on a KP3S mainboard, or to solder wires/connections.</li> <li>Allen wrenches (hex keys) to drive M3 and M5 screws.</li> <li>Side cutters</li> <li>Wire stripper</li> <li>Wire crimpers for JST connectors. If you choose not to use connectors for some parts you may be able to just cut/splice/solder/heatshrink wires together and skip this tool.</li> <li>A flat surface to assemble the frame on. I describe this in more detail later but it is needed to ensure the frame is square. This can be as simple as a countertop or glass table, etc.</li> <li>A large framing square will help ensure the frame is assembled squarely</li> <li>A combination square (regular size and also a smaller size) will be incredibly useful. I often use this as a gauge to ensure distances are the same, however you can also just use anything that you can set the length of (cut some wood, or some chopsticks from your takeout meal, etc)</li> <li>A deburring tool isn't necessary but can be pretty handy at times </li> </ul> <p></p>"},{"location":"sidebar/whats-needed.html#bill-of-materials-bom","title":"Bill of materials (BOM)","text":"<p>This is still a work in progress. </p> <p>You can read it below or you can also click on the following link to open the BOM sheet in another window/tab: BBox BOM</p>"}]}
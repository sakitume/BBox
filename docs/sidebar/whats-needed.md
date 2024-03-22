You'll need patience at times, as well as perseverence. But know that you'll be rewarded. As stated earlier you will need to think through some things as the BBox isn't
a project where every step is precisely layed out like a Lego kit. You will have options to choose from. So have fun!

## A list...
Okay...here is a higher level list of what you'll need.

* **The ability to cut 8mm linear rods to length is absolutely necessary if you are using linear rods for X axis**. The Y axis will also use linear rods for both BBox variants. It is also recommended to cut these 8mm linear rods as well but it might be possible to use full length rods (300mm for BBox180, 350mm for BBox235). I will describe this in more detail (with a video) soon.
* A way to print the BBox parts in ABS/ASA. If you aren't going to enclose the BBox then it should be okay to print with PLA. A few prototypes of the BBox180 used PLA just fine. It may also be possible to build a semi-enclosed BBox in PLA (don't use a top cover) and then reprint the parts in ABS/ASA and rebuild it or make another fully enclosed printer.
* A donor 3D printer is recommended to make the build go faster and easier but is not required. You can always source the parts individually.
* A single board computer of some kind to host Klipper. This is usually a Raspberry Pi. You can also modify a Chromebox or Chromebook or an old laptop to run linux; these work really well.


## A list of tools
You'll want or need various tools

* A soldering iron or other way to install heated inserts. A soldering iron is pretty useful anyways should you need to bridge the solder pads on a KP3S mainboard, or to solder wires/connections.
* Allen wrenches (hex keys) to drive M3 and M5 screws.
* Side cutters
* Wire stripper
* Wire crimpers for JST connectors. If you choose not to use connectors for some parts you may be able to just cut/splice/solder/heatshrink wires together and skip this tool.
* A flat surface to assemble the frame on. I describe this in more detail later but it is needed to ensure the frame is square. This can be as simple as a countertop or glass table, etc.
* A large framing square will help ensure the frame is assembled squarely
* A combination square (regular size and also a smaller size) will be incredibly useful. I often use this as a gauge to ensure distances are the same, however you can also just use anything that you can set the length of (cut some wood, or some chopsticks from your takeout meal, etc)


## Bill of materials (BOM)
This is a work in progress. Here's a simple list to start even if it doesn't have exact counts just yet

| Description | Qty | Notes | Source |  |
|---|---|---|---|---|
| Nema17 stepper motor | 3 or 4 | 3 for axle driven belted Z, otherwise 4 if using dual lead screws for Z. <br>Typically 42mm length, but most anything should work | https://www.amazon.com/gp/product/B07THZQ7RG |  |
| 2020 extrusion for **vertical** members | 4 | Exact lengths are described elsewhere |  |  |
| 2020 extrusion for **horizontal** members | 11 | Exact lengths are described elsewhere |  |  |
| 2020 extrusion for T platform | 2 | Exact lengths are described elsewhere |  |  |
| GT2 pulley 20T (with teeth) 5mm bore for 6mm belt | 5 |  |  |  |
| GT2 idler pulley 20T (tootheless) 5mm bore for 6mm belt | 5 |  |  |  |
| 5M GT2 timing belt | 1 |  |  |  |
| GT2 20T 8mm bore and 60T 8mm bore with 200mm closed belt | 1 | This is used for the axle driven belted Z drive only | https://www.amazon.com/gp/product/B08QZ4365D |  |
| 8mm linear rod for X-axis | 2 | Only used if using this variant for X-axis. <br>Exact dimensions will be described elsewhere |  |  |
| 8mm linear rod for Z-axis | 3 | Exact dimensions will be described elsewhere |  |  |
| 8mm linear rod for belted Z drive axle | 1 | Only used if using belted Z drive. <br>Exact dimensions will be described elsewhere |  |  |
| 3D printer mainboard | 1 | A simple controller board like the SKR Pico works well. <br>Or use one from a donor printer |  |  |
| Bambu Labs X1C hotend with heater, thermistor, etc | 1 | Clone hotends are great, but original may also work |  |  |
| 2510 hotend cooling fan | 1 |  |  |  |
| M2 screws for 2510 fan | 2 | These might be the only M2 machine screws used in this build |  |  |
|  |  |  |  |  |
| M5x30 BHCS or SHCS |  |  |  |  |
| M5x35 BHCS or SHCS |  |  |  |  |
| M5x10 BHCS or SHCS |  |  |  |  |
| M5x25 BHCS (must be button head) |  |  |  |  |
| M5 T-Nut |  |  |  |  |
| M5 hex nut |  |  |  |  |
|  |  |  |  |  |
| M3x10 |  |  |  |  |
| M3x25 |  |  |  |  |
| M3x30 |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
As previously mentioned, it is recommended to print the BBox parts with ABS or ASA filament.
This should be done with an enclosed printer when possible. However it may be possible to print
the parts in open air using some brands of ASA if you don't have drafts (or can rig up a simple draft shield).

If you decide not to enclose your BBox then it should be possible to print the parts with PLA. During the early
prototype stages of development I made many versions of the parts using PLA and they seemed to be okay. The only
area of concern I would have is that the motor mounts will deform when the motors get hot. To prevent that you
can dial down the run current so they don't get warm, but that will affect performance and possibly quality. 
It may be possible to print (just these) parts in PETG for their higher heat tolerance but I've heard that 
PETG can deform over time due to load/stress. I don't know if that would occur or not.


## Profile settings
Generally I like to print fast so I can test out my parts. This led me to using the following printing parameters
when I developed the BBox parts. They gave me the strength I needed and also shortened the print times by a little
compared to using Voron style print settings. So think of these as minimum settings; you can add more layers/walls
or increase the infill, etc.

* 0.2mm layer height
* 0.5mm line width
* 4 walls, 4 top layers, 4 bottom layers
* 15% infill density
* No supports needed

You can also use the Voron style print settings which are similar:

* 0.2mm layer height
* Forced 0.4mm extrusion width
* 4 walls, 5 layers for top, 5 layers for bottom
* 40% infill
* No supports needed

Or you could go the opposite direction and use a 0.25mm layer height for some parts to shorten the print time.
Do what makes you happy.

## Choosing which STL files to print
You'll need to decide if you'll be using the **linear rod** or **linear rail** variant of the BBox. The stl files
for both variants can be found in separate folders. So you can ignore the folders that don't apply.

Similarly, you can choose between the axle driven dual-belted Z-drive or the dual leadscrew Z-drive. The parts
for these two variants will also be in their respective folders. So only print the parts that apply to your choice.

Later on in this document I'll list out the folder names, the list of `.stl` files in the folder, and what
the parts are used for. This way you can decide which folder(s) to use and which to ignore as well as the orientation
of the parts when printing.

> Note: Some of the `.stl` files are meant to be printed more than once. These parts will have a suffix in their name
like `ZBearingClamp_x3.stl`. In this example the `_x3` means you'll need to print 3 copies of this part.

### Printed parts used for a BBox235 that uses linear rods for X axis
![Printed parts used for a BBox235 that uses linear rods for X axis](../images/PrintedParts.jpg)

## Build plate pics
The following section shows the print orientation you should use for each part. The arrangement of
some of the parts in these build plates were adjusted to make things easier to see and may not be the
best arrangement for printing.

The build plates show the `.stl` parts for a specific folder. The folder name and the list of `.stl` part files
within it are listed before each build plate. 

### Folder: XYMotion/MotorAssembly
Always print this. Used by all variants of the BBox

* MotorAssemblyLeft.stl
* MotorAssemblyRight.stl
* MotorAssemblyRodClamp_x2.stl
* PulleySpacer_x2.stl

![image](https://gist.github.com/assets/875866/e13a887d-0da8-462a-bd37-6aca3edfd089)

### Folder: XYMotion/FrontIdlers  
Always print this. Used by all variants of the BBox.
These are the front idlers of the CoreXY motion system.

* FrontIdlerLeftLower.stl
* FrontIdlerLeftUpper.stl
* FrontIdlerRightLower.stl
* FrontIdlerRightUpper.stl

![image](https://gist.github.com/assets/875866/34397b3a-87b3-4f2c-a4cb-736c6a6fc83c)

### Folder: Toolhead  
Always print this. Used by all variants of the BBox.
These parts comprise the toolhead.

![image](https://gist.github.com/assets/875866/5967109f-67df-4b6e-a542-958e65f88634)

### Folder: XYMotion/XRod/Joiners
These parts should only be printed if you're using the **linear rods** for x-axis variant.
These parts form the section of the gantry that join the X-axis to slide along the Y-axis.

* EndStopBumperLeft.stl
* EndStopBumperRight.stl
* PulleySpacer_x2.stl
* XYJoinerXRodBottomLeft.stl
* XYJoinerXRodBottomRight.stl
* XYJoinerXRodLeft.stl
* XYJoinerXRodRight.stl
* XYJoinerXRodTopLeft.stl
* XYJoinerXRodTopRight.stl

If using sensorless homing for X-axis you can skip printing `EndStopBumperLeft.stl` and `EndStopBumperRight.stl`.
Otherwise you can choose to print just one of these parts depending on whether you want to home to the left side or the right side of your printer.

![image](https://gist.github.com/assets/875866/1011a4be-f449-4504-b029-04cd38008925)

### Folder: XYMotion/XRod/Carriage
These parts should only be printed if you're using the **linear rods** for x-axis variant.
These pieces form the X-carriage that the toolhead will attach to.

![image](https://gist.github.com/assets/875866/0805e08c-9c9c-4773-bb2d-bcfcb1f6d19d)

### Folders: XYMotion/XRail/Joiners and XYMotion/XRail/Carriage_Basic  
These parts should only be printed if you're using the **MGN12C linear rail** for x-axis variant.

**The parts in `XYMotion/XRail/Joiners` form the section of the gantry that join the X-axis to slide along the Y-axis.**  
There are two sizes available; a +70mm variant and a +75mm variant. Choose the size that matches your desired
horizontal extrusion length. For example if you're building a BBox180 using a 225mm rail and you want to use 300mm extrusion
then use the +75mm parts listed below instead of the +70mm versions.

* XYJoinerLeft_75.stl
* XYJoinerRight_75.stl

As another example, say you want to build a BBox using a 250mm rail and want to use pre-cut 320mm extrusion, then you would use
the following parts instead:

* XYJoinerLeft_70.stl
* XYJoinerRight_70.stl

**The parts in `XYMotion/XRail/Carriage_Basic` form the X-carriage that the toolhead will attach to.** 

> Note: There is also an `XYMoton/XRail/Carriage_DragonBurner` folder with carriage parts that may work with Voron DragonBurner toolhead. These are still a work in progress and have only been briefly tested.

![image](https://gist.github.com/assets/875866/43229087-c940-4b70-9738-f5fa3cf6fa43)

### Folder: XYMotion/EndStopY
This folder contains three different versions of an endstop mount for the Y axis. This is not needed if you will be using sensorless homing.

* EndStopY_Flat.stl
* EndStopY_Left.stl
* EndSotpY_Right.stl

No picture of a buildplate is provided as print orientation should be apparent and also you will only need to print one of these parts.

Choose `EndStopY_Flat.stl` if you're using linear rods for X-axis. You can use this part to mount an endstop switch on either the left or right side of the printer.

If using linear rail for X-axis then choose either `EndStopY_Left.stl` or `EndStopY_Right.stl` to mount the endstop depending on which side you prefer to mount your switch.



### Folder: ZDrive_Belted/AxleDrive
These parts should only be printed if you're using the dual-belted Z-drive variant.

* AxleBearingSupport_x2.stl
* Z_Motor_Mount.stl
* ZIdlerPulley_x2.stl

![image](https://gist.github.com/assets/875866/f36bf6a1-fb28-455b-85d5-8632935dfbc4)

### Folder: ZDrive_Platform  
Always print this. Used by all BBox variants.
The corner clamp parts are used to form the T platform while the other parts are used to support the motion of that platform up and down the Z axis.
The printer bed will mount onto this T platform.

* CornerClamp_40mm_x2.stl
* ZBearingClamp_x3.stl
* ZRodClampAligned_x6.stl
* ZSwitchMountOneSided.stl
* ZSwitchPlate.stl

![image](https://gist.github.com/assets/875866/6a0bdb4a-7a2d-4575-b3f9-8c08201efe8a)

### Folder: ZDrive_Belted/Clamps
These parts should only be printed if you're building the dual-belted Z-drive variant.
These are the parts that clamp the ends of each belt and the mounts that attach the clamp the T platform.

* ClampMountParallel_Heatsets.stl
* ClampMountParallel_SquareNuts.stl
* ClampMountPerpendicular.stl
* SlidingClamp_Parallel.stl
* SlidingClamp_Perpendicular.stl
* StationaryClamp_Parallel.stl
* StationaryClamp_Perpendicular.stl

![image](https://gist.github.com/assets/875866/2f6d0906-0ba2-4c33-b916-9f2394032d3a)

### Folder: ZDrive_LeadScrew
These parts should only be printed if you're building the dual leadscrew variant

* LeadScrewNutMount.stl
* LeadScrewNutMountOffset.stl
* ZMotorMount_x2.stl

![image](https://gist.github.com/assets/875866/68b25d68-b3ca-40e1-96fe-020a4f4e24ee)

### Folder: Toolhead - BambuX1_V6.stl only  
Always print this part. It is used by all variants of the BBox. 
This part is used to adapt a clone Bambu Labs X1C hotend to the V6 (J-Head) hotend mount.
This is the only part where supports (on build plate only) are recommended. If you print 
very slow you might not need the supports. You will want to prevent supports from being
generated in/around the "block" area of the adapter. 

* BambuX1_V6.stl  
![image](https://gist.github.com/assets/875866/75dca200-ce05-4356-ac37-1a4d8bb8c57e)
![image](https://gist.github.com/assets/875866/3ef7e9e8-9f9b-4a08-b012-1cdd0bb7e729)
![image](https://gist.github.com/assets/875866/ae05bc54-bcc9-4d5a-8c5d-4acffd7bfff3)



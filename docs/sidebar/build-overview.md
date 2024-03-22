## What you need to know before building

The BBox is not terribly difficult to build. In some ways I think it may be easier than many CoreXY printers. However it still requires a bit of thinking, troubleshooting and problem solving in order to successfully build a BBox that will perform well.

In some ways the BBox is more of a platform rather than a single printer design. You can mix and match different components of the BBox design to match the parts you have
or the design that you wish. Specifically this means you can choose between having an X-axis that uses an MGN12C rail, or an X-axis that uses two 8mm linear rods. Another example is that you can use either double-leadscrews for the Z-axis, or an axle driven dual-belted Z-drive. More on the Z drive options in a later section. For now lets
focus on the X-axis options.

### Linear rods for X axis
This variant works very well and lets you build any size of the BBox (along X). I have built a BBox235 and a BBox180 using rods with good performance characterstics.

> Using linear rods for X will require you have the ability to cut these to a specific length. Or be able to purchase them to a specific length. I find it easy to cut 8mm linear rods to length using an angle grinder with a cutoff wheel.  
**NOTE**: You cannot cut linear rods with a hacksaw. A tool with an abrasive wheel is required

![image](https://gist.github.com/assets/875866/17875624-1192-4f6a-bcfc-519fcb057456)
![image](https://gist.github.com/assets/875866/18ca4e64-ce5c-4886-92e0-50e1d29738e3)

**So please keep this in mind**. If you are unable to cut (or purchase pre-cut) linear rods to a specific length, this project may not be for you.

### MGN12C for X axis
There is another variant of the BBox that uses an MGN12C linear rail for the X-axis. There are some pros and cons to this option.

The pros:

* The X axis becomes quite a bit simpler to build and assemble (less parts)
* You will have one of these rails if using a KP3S (or KP3S Pro) donor

The cons:

* The length of the horizontal 2020 extrusions (for X) must be exactly 70mm or 75mm longer than your MGN12C rail.
    * This isn't necessarily a bad thing, it just means you can't make it extra wide for some reason
    * So for a BBox180 using a 225mm MGN12C your horizontal extrusions must be either 295mm or 300mm long. 
    * If using a 250mm MGN12C then your horizontal extrusions must be either 320mm or 325mm long
        * Pre-cut 320mm extrusion seems to be readily available on Amazon, but I don't see any listings for pre-cut 325mm

### Printing Parts

If you are going to make an enclosed BBox (highly recommended but not necessary) then it is strongly advised to print the BBox parts in either ABS or ASA. I have used both
materials and the fitment, strength and heat tolerance are known to work well. Printing the parts in PETG is not recommended. Printing in PLA might be okay if it won't be enclosed but you'll likely need to reduce the run current on your stepper motors so they run cooler than normal and don't warp/melt the plastic motor mounts. Its best to run "normal" current
rather than lower current on the steppers for best performance **and** print quality.

I've heard on the Delayed Discord server that some ASA can be printed open-air with fairly good results (as long as you don't have drafts). You can also use a cardboard box
or a printer tent/enclosure to enclose your printer (such as an Ender 3) to print out the BBox parts in ABS/ASA. This is what I did for my first BBox prototype.

### Heatset inserts
Some of the parts will require the use of heatset inserts. They are pretty easy and straightforward to install into the BBox parts.


![image](https://gist.github.com/assets/875866/283dcc19-a6e1-4779-b0ab-2f1119d3b5a7)

### Electronics, Klipper, and related

Using an existing 3D printer as a donor will give you most of the electrical/electronic parts you'll need. The original BBox prototype was made using a Kingroon KP3S printer for parts. Alternatively you can self source all of the various parts needed; this is actually a pretty good option as well.

If using a KP3S or KP3S Pro as a donor, I will show you how to bridge a few solder pads on the mainboard so that you can easily configure the run current of your stepper drivers so that you can tune the run current of the steppers using Klipper. 

![image](https://gist.github.com/assets/875866/1e2068a3-09a6-44bb-9a83-081192fd417e)

The KP3S/KP3S Pro mainbaord uses TMC 2208 stepper drivers. These drivers don't support sensorless
homing (which is perfectly fine), this means you will want to re-use the mechanical endstop switches from the KP3S.

If you're using a mainboard that has the TMC 2209 drivers (like the SKR Pico) then you can use sensorless homing for X and Y if you wish, however Z will still use a mechanical endstop at the bottom.


#### Klipper
The BBox was designed to work with Klipper firmware. There is no support for Marlin, RepRap, etc. This means you'll need a Klipper host computer board, usually a Raspberry Pi.
I've never used a Raspberry Pi for my printers as I've always had cheaper alternatives on hand (some Rockchip single board computers, or re-purposed Chromeboxes, or Orange Pi, etc). 


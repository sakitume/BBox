As mentioned previously, the BBox is scalable. This means you can build it as small or as large as you want (along any dimension) within reason.
This means the size of the frame, and the linear rods can vary depending on what you want. Typically these dimensions will be based on the
size of the bed you'll be using as well as the build height you wish to have. 

> Do you remember when I said you'll need to think a little as you'll have options to consider? You'll soon see why I said that.

## Sizing the horizontal members of the frame
To be able to fully utilize the entire bed a minimum length of horizontal extrusions (for the frame) needs to be met. If your bed is square
like the ones that a KP3S donor or Ender 3 can provide, then the horizontal extrusions can all be the same size. Not only does this make
things easier (to either purchase or cut), it also gives you just enough room in the back side of the enclosure to store your spool of filament
while printing.

> Note: You *can* go larger than the minimum should you desire some extra space, but there's usually about 10 or 15mm of free space at the back of the Y axis
when using the minimum. This should be enough for a purge or nozzle wipe area, or a klicky probe mount, etc.

### Sizing along X

I could just say, "if using a 180mm build plate then horizontal extrusions should be exactly 300mm in length" or "if using a 235mm build plate use 350mm horizontal extrusion".
But instead I'm going to give you the reason why that's not entirely true so that you can adjust as you wish.

#### If using an MGN12C rail for the X-axis
When using an MGN12C rail for the X-axis **the length of your horizontal extrusions must be either 70mm or 75mm longer than your rail.**
For example, the MGN12C rail found on a KP3S is 225mm long. So your horizontal extrusion will be either 295mm or 300mm in length. It's pretty easy to find pre-cut lengths of 2020 extrusion that is 300mm in length. I cut my own extrusions to length (more about this later) so I used 295mm for my BBox180 printers. This allowed me to use 16"x20" plexiglass panels for the front door without having to cut the panel and also have the panel overlap the extrusions by about 4.5mm on each side. If I had used pre-cut 300mm extrusions these 16"x20" panels would still have a little bit of overlap, around 2mm on each side.

> Note: At this time the current X/Y joiner parts are designed so that you'd use the "70mm longer than rail" length. I will either make another variant of these parts for the "75mm longer" or adjust these parts so they can be used for either case.

#### If using linear rods for the X-axis
If you choose to use linear rods for the X-axis then **the length of your horizontal extrusions must be either 115mm or 120mm longer than your bed width.** For my BBox180 using
linear rods I chose (again) to use extrusions that were 295mm in length (180 + 115). But as described earlier I could have used 300mm instead.

For the BBox235 that I built, I used 350mm length extrusions (235 + 115).


## Sizing the linear rail or linear rods for the X-axis
As previously mentioned the BBox can use either two linear rods or a single MGN12C linear rail for the X-axis motion. If using a KP3S donor
then the MGN12C variant is an ideal choice.

### Sizing the MGN12C linear rail for the X-axis
This applies only if using the linear rail for X-axis variant.  

This variant has only been tested with a 225mm MGN12C that was pulled from a KP3S donor printer. The 180x180 bed from the KP3S was also used.
By using these two parts together the full 180mm length of the bed were usable. 

So generally speaking the MGN12C should be 45mm longer than the length of the printer bed (along X axis).

> Note: The KP3S Pro uses 250mm rails and advertises a build volume of 200x200x200, however the bed is actually 210x210 in dimension. So if you are using a KP3S Pro as a donor it is possible your usable build space may end up being 205x205 along X/Y (or even more). This has yet to be confirmed.

### Sizing the linear rods for the X-axis
This applies only if using the linear rods for X-axis variant.  

The two rods used for the X-axis will need to be cut to a specific length based on the length of horizontal extrusion you decided upon.
And if that wasn't enough, one of these two rods needs to be just a few mm shorter than the other. **The top rod needs to be 8mm shorter than your horizontal extrusion and the bottom rod needs to be 5mm shorter than the horizontal extrusion.**

> You could just cut them to the same length (the shorter of the two). That should be okay as well.

For example on my BBox235 using 350mm horizontal extrusion I used 342mm for the top rod and 345mm for the bottom rod.

## Sizing the rods for the Y-axis
All variants of the BBox will use linear rods for the Y-axis. The length of these rods depends on the length of your horizontal extrusions that go along the Y direction. Normally these extrusions are the same length as the horizontal ones that go along the X direction, but if they're different then use the length of your Y axis extrusions
for the following calculation. **The length of these two rods should be 15mm less than your horizontal extrusions**.

For example if your building a BBox235 with 350mm length horizontal extrusions then your Y rods will be 335mm in length (350 - 15).

## Sizing the vertical members of the frame
The four vertical upright members of the frame should be **a minimum of 100mm longer than your horizontal extrusions**. If you can go another 20mm or 100mm longer than
you'll have more space for the reverse bowden tube and wire harness (leading to the extruder) to comfortably travel within.

With my BBox180 printers using 295mmm horizontal extrusions I used 400mm length extrusions for my vertical uprights.

> Note: If you can cut your own extrusions, you can purchase 1m lengths that you cut two sections out of, each section being 295mm (or 300mm) long. The left over piece of that 1m length is now approximately 400mm. Do this a total of 4 times and you'll end up with 8 horizontal and 4 vertical members. Then cut one more 1m length into 3 sections for the remaining horizontal extrusions (you need a total of 11 of them). This is a very efficient way to build your frame with little waste along with lower cost.

## Sizing the linear rods used for the Z-axis
**These 3 rods should be same length as your horizontal extrusions**. So if you're using 300mm horizontal extrusions for a BBox180 then these 3 rods will also be
300mm in length. If using 350mm horizontal extrusion for a BBox235 then you'll want linear rods that are 350mm in length.

## Sizing the extrusion used for the T-platform of the Z-axis
> Note: The Z-axis and this T-platform are the parts of the build that are the most nebulous or ambiguous. For the T-platform you
could just buy two extra pieces of extrusion that are the same length as your horizontal extrusions...and then be prepared to cut 30mm off of one of these. More about this later.

Two lengths of 2020 extrusion are joined together to form a "T" shape. When looking at the front of the printer I normally have the T on its side so it looks something like this: `|---`

![image](https://gist.github.com/assets/875866/17c18ea0-c434-43dc-bf75-131564d48728)

In the picture above you can see the top part of the T already connected to two vertical linear rods. There is also another piece of 2020 extrusion that will be connected to this top part of the T.

Generally speaking the top part of the T will be about 50mm longer than length of your bed. However it can be as long as your horizontal extrusions. I just use whatever scrap I happen to have on hand that is close enough.

The other part of the T has a more specific dimension: it should be 30mm shorter than your horizontal extrusions. Only one end of this extrusion
needs to be square (the end that connects to the top part of the `T`), so if are buying pre-cut extrusions that are "standard" or common lengths, you can just buy two additional pieces that are the same length as your horizontal extrusions and just cut one of them to be 30mm shorter using whatever method you have available (a hacksaw is fine) as the cut end doesn't need to be square and clean.


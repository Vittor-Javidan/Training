formula to simulate 3d coordinates in one single buffer

	Max index of an array with all possible coordinates from a 3d space
		maxIndexCount = (Width * Height * Depth) - 1
 
	How to find the index respective to a single coordinate:
		arrayIndex =  x + (Width)y + (Height * Width)z

	Max allowable size for arrays: 65,536 bytes
		that means 32,768 short variables
			wich means a exacly cube of 32x32x32
			or a cartesian plane 181 x 181
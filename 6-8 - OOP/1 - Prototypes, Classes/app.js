
// prototypes
    // js types come with a reference to a prototype class
    // ex: array.prototype.<method>
    // you can add custom methods to a prototype
    Array.prototype.example = function() {
        console.log('test')
    }
    Array.prototype.example()

    const testArray = [1,2,3]
    testArray.example()

    String.prototype.yell = function() {
        return `${this.toUpperCase()}!!!`
    }
    const yellString = "test yell".yell()
    console.log(yellString)

    // overwrite the standard pop method
    Array.prototype.pop = function() {
        return 'this method will not pop'
    }

    // __proto__ is a reference to the prototype object. this will be used when you've defined an object
    // Array.prototype is the actual prototype object




// factory functions
    // This functions makes and returns an object every time it is called.
    function makeColor(r, g, b) {
        const color = {}
        color.r = r
        color.g = g
        color.b = b

        // make some methods
        color.rgb = function() {
            const {r, g, b} = this // were destructuring from 'this'
            return `rgb(${r}, ${g}, ${b})`
        }
        color.hex = function() {
            const { r, g, b } = this;
            return (
                '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
            );
        };
        
        return color
    }

    // create some objects
    const color = makeColor(35, 255, 150)
    color.hex()
    color.rgb()

    const black = makeColor(0, 0, 0);
    black.rgb(); //"rgb(0, 0, 0)"
    black.hex(); //"#0000s00"

    // black.hex !== color.hex - each instance has its own copy of the rgb and hex methods






// constructor functions - used more commonly than factory functions
    // make a constructor function
/*     function Color(r, g, b) {
        // an object is created implicitly, we then refer to it as 'this'
        this.r = r
        this.g = g
        this.b = b
        // the object is then implicitly returned and 'this' no longer refers to it
        //console.log(this) // 'this' here refers to the window object
    }

    //If you call it on its own like a regular function...
    Color(35, 60, 190); //undefined
    //It returns undefined

    // need the 'new' operator
        // 1. Creates a blank, plain JavaScript object;
        // 2. Links (sets the constructor of) this object to another object;
        // 3. Passes the newly created object from Step 1 as the this context;
        // 4. Returns this if the function doesn't return its own object.


    // we can now add methods to a prototype, rather than to individual objects
    Color.prototype.rgb = function() {
        const {r, g, b} = this // were destructuring from 'this'
        return `rgb(${r}, ${g}, ${b})`
    }
    Color.prototype.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    Color.prototype.rgba = function(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    // use the 'new' keyword when youre calling the constructor
    const color1 = new Color(40, 60, 80)
    color1.hex()
    color1.rgb()

    const color2 = new Color(0, 0, 0)
    color2.rgba() 
*/




// classes
    class Color {
        // constructor automatically runs as long as its name is constructor
        constructor(r, g, b, colorName) {
            this.r = r
            this.g = g
            this.b = b
            this.name = colorName
            this.calcHSL() // call this method when a new object is created
        }

        rgb() {
            const {r, g, b} = this // were destructuring from 'this'
            return `rgb(${r}, ${g}, ${b})`
        }
        rgba(a = 1.0) {
            const { r, g, b } = this;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        };
        hex() {
            const { r, g, b } = this;
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };
        hsl() {
            const { h, s, l } = this;
            return `hsl(${h},${s}%, ${l}%)`;
        }
        fullySaturated() {
            const { h, l } = this;
            return `hsl(${h},100%, ${l}%)`;
        }
        opposite() {
            const { h, s, l } = this;
            const newHue = (h + 180) % 360;
            return `hsl(${newHue},${s}%, ${l}%)`;
        }

        // a complicated method that we got from stack overflow
        calcHSL() {
            // destructure from this
            let { r, g, b } = this;

            // Make r, g, and b fractions of 1
            r /= 255;
            g /= 255;
            b /= 255;
    
            // Find greatest and smallest channel values
            let cmin = Math.min(r, g, b),
                cmax = Math.max(r, g, b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;
            if (delta == 0) h = 0;
            else if (cmax == r)
                // Red is max
                h = ((g - b) / delta) % 6;
            else if (cmax == g)
                // Green is max
                h = (b - r) / delta + 2;
            else
                // Blue is max
                h = (r - g) / delta + 4;
    
            h = Math.round(h * 60);
    
            // Make negative hues positive behind 360°
            if (h < 0) h += 360;
            // Calculate lightness
            l = (cmax + cmin) / 2;
    
            // Calculate saturation
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
            // Multiply l and s by 100
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            // assign everything to this
            this.h = h;
            this.s = s;
            this.l = l;
        }
    }

    // create some objects of class Color
    const red = new Color(255, 67, 89, 'red')
    red.hsl();
    red.opposite();
    red.rgba(0.3);
    const white = new Color(255, 255, 255, 'white');
    // these are both objects





// extends and super (inheritance)
    // make a base/super/parent/inherited class for cat and dog
    class Pet {
        constructor(name, age) {
            console.log('inside pet constructor')
            this.name = name
            this.age = age
        }
        eat() {
            return `${this.name} is eating!`;
        }
    }

    class Cat extends Pet{
        // we dont need a constructor for cat, since it has inherited the pet constructor
        meow() {
            return 'meow!'
        }
    }

    class Dog extends Pet{
        // we can replace the inherited constructor with a new one though
        constructor(name, age, isGoodBoy = true) {
            console.log('inside dog constructor')
            super(name, age) // we can still reuse the inherited constructor. 'super' is a reference to the super class
            this.isGoodBoy = isGoodBoy
        }

        bark() {
            return 'bark!'
        }

        // if we make a new eat method here, it will replace the inherited eat method
        eat() {
            return `${this.name} scarfs his food!`;
        }
    }





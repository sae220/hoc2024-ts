enum HeadWear {
    //% blockIdentity="blocks.custom" enumval=1 block="superstar"
    //% jres alias=Superstar_Hat
    Superstar_Hat,
    //% blockIdentity="blocks.custom" enumval=2 block="knight helmet"
    //% jres alias=Knight_Helmet
    Knight_Helmet,
    //% blockIdentity="blocks.custom" enumval=3 block="sun glasses"
    //% jres alias=Sun_Glasses
    Sun_Glasses,
    //% blockIdentity="blocks.custom" enumval=4 block="reading glasses"
    //% jres alias=Reading_Glasses
    Reading_Glasses,
    //% blockIdentity="blocks.custom" enumval=5 block="cowboy hat"
    //% jres alias=Cowboy_Hat
    Cowboy_Hat,
    //% blockIdentity="blocks.custom" enumval=6 block="astronaut helmet"
    //% jres alias=Astronaut_Helmet
    Astronaut_Helmet,
    //% blockIdentity="blocks.custom" enumval=7 block="baseball hat"
    //% jres alias=Baseball_Hat
    Baseball_Hat,
    //% blockIdentity="blocks.custom" enumval=8 block="construction helmet"
    //% jres alias=Construction_Helmet
    Construction_Helmet,
    //% blockIdentity="blocks.custom" enumval=9 block="ballerina crown"
    //% jres alias=Ballerina_Crown
    Ballerina_Crown,
}

enum HeadWear_Activity {
    //% block="knight helmet"
    Knight_Helmet,
    //% block="cowboy hat"
    Cowboy_Hat,
    //% block="astronaut helmet"
    Astronaut_Helmet
}


enum MidWear {
    //% block="superstar"
    //% jres alias=Superstar_Shirt
    Superstar_Shirt,
    //% block="construction shirt"
    //% jres alias=Construction_Shirt
    Construction_Shirt,
    //% block="cowboy shirt"
    //% jres alias=Cowboy_Shirt
    Cowboy_Shirt,
    //% block="astronaut suit"
    //% jres alias=Astronaut_Top
    Astronaut_Top,
    //% block="knight armor"
    //% jres alias=Knight_Top
    Knight_Top,    
    //% block="varsity jacket"
    //% jres alias=Varsity_Jacket
    Varsity_Jacket,
    //% block="green t-shirt"
    //% jres alias=Green_TShirt
    Green_TShirt,
    //% block="backsetball jersey"
    //% jres alias=Basketball_Jersey
    Basketball_Jersey,
    //% block="ballerina shirt"
    //% jres alias=Ballerina_Shirt
    Ballerina_Shirt
}

enum MidWear_Activity {
    //% block="cowboy shirt"
    Cowboy_Shirt,
    //% block="astronaut suit"
    Astronaut_Top,
    //% block="knight armor"
    Knight_Top
}

enum LowerWear {
    //% block="superstar"
    Superstar_Pants,
    //% block="swim shorts"
    Swim_Shorts,
    //% block="knight leggings"
    Knight_Legs,
    //% block="cowboy jeans"
    Cowboy_Pants,
    //% block="astronaut pants"
    Astronaut_Legs,
    //% block="khaki shorts"
    Khaki_Shorts,
    //% block="boots"
    Black_Boots,
    //% block="construction jeans"
    Construction_Pants,
    //% block="ballerina tutu"
    Ballerina_Tutu
}

enum LowerWear_Activity {
    //% block="knight leggings"
    Knight_Legs,
    //% block="cowboy jeans"
    Cowboy_Pants,
    //% block="astronaut pants"
    Astronaut_Legs
}

//GLOBAL VARIABLES
const communicationsTimeout = 100;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {

// COSTUME ACTIVITY

    //SANDBOX
    /**
     * This function takes three parameters and defines what
     * clothing items should be placed on the head, body and leggs
     * 
     * Usage Example: hoc.costume(HeadWear.Knight_Helmet, MidWear.Knight_Top, LowerWear.Knight_Legs)
     */        
    //% block="head %u body %m legs %l"
    //% u.fieldEditor="gridpicker"
    //% u.fieldOptions.columns=4
    //% m.fieldEditor="gridpicker"
    //% m.fieldOptions.columns=4
    //% l.fieldEditor="gridpicker"
    //% l.fieldOptions.columns=4   
    export function costume(u: HeadWear, m: MidWear, l: LowerWear): void {
        switch (u) {
            case HeadWear.Superstar_Hat:
                player.execute("scoreboard players set upper costume.var 01")
                break;
            case HeadWear.Knight_Helmet:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWear.Sun_Glasses:
                player.execute("scoreboard players set upper costume.var 03")
                break;
            case HeadWear.Reading_Glasses:
                player.execute("scoreboard players set upper costume.var 04")
                break;
            case HeadWear.Cowboy_Hat:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWear.Astronaut_Helmet:
                player.execute("scoreboard players set upper costume.var 06")
                break;
            case HeadWear.Baseball_Hat:
                player.execute("scoreboard players set upper costume.var 07")
                break;
            case HeadWear.Construction_Helmet:
                player.execute("scoreboard players set upper costume.var 08")
                break;
            case HeadWear.Ballerina_Crown:
                player.execute("scoreboard players set upper costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (m) {
            case MidWear.Superstar_Shirt:
                player.execute("scoreboard players set middle costume.var 01")
                break;
            case MidWear.Construction_Shirt:
                player.execute("scoreboard players set middle costume.var 02")
                break;
            case MidWear.Cowboy_Shirt:
                player.execute("scoreboard players set middle costume.var 03")
                break;
            case MidWear.Astronaut_Top:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWear.Knight_Top:
                player.execute("scoreboard players set middle costume.var 05")
                break;
            case MidWear.Varsity_Jacket:
                player.execute("scoreboard players set middle costume.var 06")
                break;
            case MidWear.Green_TShirt:
                player.execute("scoreboard players set middle costume.var 07")
                break;
            case MidWear.Basketball_Jersey:
                player.execute("scoreboard players set middle costume.var 08")
                break;
            case MidWear.Ballerina_Shirt:
                player.execute("scoreboard players set middle costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (l) {
            case LowerWear.Superstar_Pants:
                player.execute("scoreboard players set lower costume.var 01")
                break;
            case LowerWear.Swim_Shorts:
                player.execute("scoreboard players set lower costume.var 02")
                break;
            case LowerWear.Knight_Legs:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWear.Cowboy_Pants:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWear.Astronaut_Legs:
                player.execute("scoreboard players set lower costume.var 05")
                break;
            case LowerWear.Khaki_Shorts:
                player.execute("scoreboard players set lower costume.var 06")
                break;
            case LowerWear.Black_Boots:
                player.execute("scoreboard players set lower costume.var 07")
                break;
            case LowerWear.Construction_Pants:
                player.execute("scoreboard players set lower costume.var 08")
                break;
            case LowerWear.Ballerina_Tutu:
                player.execute("scoreboard players set lower costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="head %u body %m legs %l"
    export function _costume_activity(u: HeadWear_Activity, m: MidWear_Activity, l: LowerWear_Activity): void {
        switch (u) {
            case HeadWear_Activity.Knight_Helmet:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWear_Activity.Cowboy_Hat:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWear_Activity.Astronaut_Helmet:
                player.execute("scoreboard players set upper costume.var 06")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (m) {
            case MidWear_Activity.Cowboy_Shirt:
                player.execute("scoreboard players set middle costume.var 03")
                break;
            case MidWear_Activity.Astronaut_Top:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWear_Activity.Knight_Top:
                player.execute("scoreboard players set middle costume.var 05")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (l) {
            case LowerWear_Activity.Knight_Legs:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWear_Activity.Cowboy_Pants:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWear_Activity.Astronaut_Legs:
                player.execute("scoreboard players set lower costume.var 05")
                break;
        }
        loops.pause(communicationsTimeout)
    }
// END COSTUME ACTIVITY

}
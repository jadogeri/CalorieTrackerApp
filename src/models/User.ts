/**
 * @author      Joseph Adogeri
 * @since       05/30/2024
 * @version     1.0
 * @description Represents the blueprint of a User
 */

class User  {

    private username? : string;
    private email : string;
    private password : string;

    public constructor(username : string, password : string, email : string ){

        this.username = username;
        this.password = password;
        this.email = email;

    }

    public setUsername(username : string) : void {

        this.username = username;

    }

    public setEmail(email : string) : void {

        this.email = email;

    }

    public setPassword(password : string) : void {

        this.password = password;

    }

    public getUsername() : string {

        return this.username ;

    }

    public getEmail() : string {

        return this.email ;

    }

    public getPassword() : string {

        return this.password;

    }

}

export default User;
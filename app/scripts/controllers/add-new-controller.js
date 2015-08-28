/**
 * Created by maninders on 27/8/15.
 */

UserRegistrationApp.AddUserController = Ember.Controller.extend({
    isFormValid : true,
    validAddUserForm : function(){
        var firstName = this.get('firstName');
        var middleName = this.get('middleName');
        var lastName = this.get('lastName');

        if(firstName != "" && middleName != "" && lastName != ""){
            this.set('isFormValid',false);
        }else{
            this.set('isFormValid',true);
        }
    }.observes('firstName','middleName','lastName'),
    actions : {
        addNewUser : function(){
            this.set('firstName',"");
            this.set('middleName',"");
            this.set('lastName',"");
            this.transitionToRoute('get-all-users');
        }
    }
});
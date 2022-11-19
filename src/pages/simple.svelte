<script lang="ts">
let thirdpartycanpickup:boolean = false;

</script>

<div class="card">
    <h3 class="h3">About the Child</h3>
    <div class="input-field">
        <input type="text" name="first_name" max-length={100} placeholder="first name"/>
    </div>
    <div class="input-field">
        <input type="text" name="last_name" max-length={100} placeholder="last name"/>
    </div>
    <div class="input-field">
        <input type="text" name="age" max-length={3} placeholder="age"/>
    </div>

    <p>Gender</p>
    <div class="input-field radio">
        <div class="input-radio">
            <p>male</p>
            <input type="radio" id="gender" name="gender" value="female" />
        </div>
        <div class="input-radio">
               <p>female</p>
            <input type="radio" id="gender" name="gender" value="male" />
        </div>
    </div>

    <div class="spacer"></div>

    <h3 class="h3">About the Parent</h3>
    <div class="input-field">
        <input type="text" name="guardian_first_name" max-length={100} placeholder="first name"/>
    </div>
    <div class="input-field">
        <input type="text" name="guardian_last_name" max-length={100} placeholder="last name"/>
    </div>
    <div class="input-field">
        <input type="text" name="guardian_phone_number" max-length={12} placeholder="phone number"/>
    </div>

    <p>can someone else pick up your child?</p>
    <div class="input-field radio">
        <div class="input-radio" on:click={()=> thirdpartycanpickup = false}>
            <p>no</p>
            <input type="radio" id="allow_third_party_pick_up" name="allow_third_party_pick_up" value="no" />
        </div>
        <div class="input-radio"  on:click={()=>thirdpartycanpickup = true}>
             <p>yes</p>
            <input type="radio" id="allow_third_party_pick_up" name="allow_third_party_pick_up" value="yes" />
        </div>
    </div>

    {#if thirdpartycanpickup === true }
    <div class="spacer"></div>
    <h3 class="h3">who else can pick up?</h3>
    <div class="input-field">
        <input type="text" name="second_guardian_first_name" max-length={100} placeholder="first name"/>
    </div>
    <div class="input-field">
        <input type="text" name="second_guardian_last_name" max-length={100} placeholder="last name"/>
    </div>
    {/if}
</div>




<style>
    .spacer{
        height: 2rem;
        width: 100%;
    }

    .card{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0 ;
        width: 90vw;
        margin: auto;
        max-width: 60rem;
        height: 90vh;
        overflow-y: scroll;
        background-color: rgba(255, 255, 255, .8);
        border: 2px solid white; 
        border-radius: 2em;
    }
    .h3{
        color: #257cc4;
        font-size: 3rem;
        font-family: var(--fourth-font);
        margin-bottom: 2rem;
    }

    .input-field {
        width: 90%;
        margin: auto;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .input-field input, .input-field input::placeholder{
        font-family: var(--fourth-font);
        padding: 1rem 2rem;
        display: block;
        background-color: #257cc4;
        margin-bottom: 1rem;
        border-radius: 2em;
        width: 100%;
        color: white;
    }
    .input-field input::placeholder{
       color: rgba(255, 255, 255, .5)
    }

    .input-radio{
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .input-field.radio{
        width: 90%;
       justify-content: flex-start;
    }

    .input-field.radio div{
        width: 50%;
    }

      .input-field.radio p, p {
        font-size: 2rem;
        font-family: var(--fourth-font);
        display: inline-block;
        width: auto;
        margin: 0 2rem 0 0;
      }

      p {
        width: 90%;
        margin: auto;
      }

      .input-field.radio .input-radio{
        margin-right: 2rem;
      }

       .input-radio input {
        margin-top: 1rem;
        width: 4rem;
        height: 4rem;
      }
</style>
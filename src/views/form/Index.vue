<template>
    <section class="sign">
        <h1 class="header">Formularz zgłoszeniowy</h1>
        <form class="sign__form">
            <label class="label">
                <span class="text">Imię i nazwisko uczestnika:</span>
                <input class="input" type="text" name="name" />
            </label>
            <label class="label">
                <span class="text">Data urodzenia uczestnika:</span>
                <input class="input" type="date" name="born" />
            </label>
            <label class="label">
                <span class="text">Imię i nazwisko opiekuna</span>
                <input class="input" type="text" name="guardian" />
            </label>
            <label class="label">
                <span class="text">Rodzaj warsztatów:</span>
                <div class="select">
                    <select class="input" name="workshop">
                        <option>Opcja 1</option>
                        <option>Opcja 2</option>
                    </select>
                </div>
            </label>
            <label class="label">
                <span class="text">E-mail kontaktowy:</span>
                <input class="input" type="email" name="email" />
            </label>
            <label class="label">
                <span class="text">Telefon kontaktowy:</span>
                <input class="input" type="text" name="phone" />
            </label>
            <label class="label">
                <span class="text">Uwagi:</span>
                <input class="input" type="text" name="name" />
            </label>
            <button class="button">wyślij formularz zgłoszeniowy</button>
        </form>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.sign {
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    .header {
        text-align: center;
        padding: 16px;
    }

    &__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: radial-gradient(farthest-corner at 40px 40px, #4F6C9C, #2E4E82);
        background-clip: padding-box;
        padding: 16px 16px;

        @include breakpoint($lg) {
            padding: 0 32px;
        }

        @include breakpoint($elg) {
            padding: 0 calc((100% - 1200px) / 2 + 128px);
        }

        .label {
            display: flex;
            flex-direction: column;

            .text {
                color: #fff;
                font-family: Roboto;
                font-size: 14px;
                font-weight: 400;
                padding: 16px 0;
            }

            .input {
                border: 2px solid #ACACAC;
                border-radius: 50px;
                height: 64px;
                font-size: 14px;
                color: #ACACAC;
                font-family: Roboto;
                padding: 0 32px;
                outline: none;
            }

            .select {
                overflow: hidden;
                border-radius: 50px;
                border: 2px solid #ACACAC;
                background-color: #fff;

                .input {
                    border: none;
                    border-radius: 0px;
                    width: 100%;
                    background-color: inherit;
                }
            }
        }

        .button {
            margin: 32px 0;
            height: 64px;
            background-color: #E50019;
            font-size: 16px;
            font-weight: bold;
            font-family: Roboto;
            text-transform: uppercase;
            border-radius: 50px;
            color: #fff;
            border: none;
            transition: 0.3s all;

            &:hover {
                background-color: #B82820;
            }
        }
    }
}
</style>

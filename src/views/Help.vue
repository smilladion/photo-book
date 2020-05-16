<template>
    <section>
        <h3>Hjælp til fotobogen</h3>
        <hr>

        <h6 class="text-muted text-center my-4">
            Vælg et af de nedenstående emner, som passer til det du søger hjælp til.
        </h6>

        <!--
        Kode fundet fra Bootstrap Vue's dokumentation (også tilfældet for andre komponenter)
        https://bootstrap-vue.org/docs/components/collapse
        -->
        <div role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="white" class="text-left">Navigation af siden</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            Der er flere måder du kan navigere rundt på siden på, og ofte vises der links, som tager dig
                            direkte hen til en side - for eksempel på forsiden, hvor man let kan navigere sig hen til fotobogen
                            gennem en knap. <br/><br/>
                            Gennem navigationsbaren i toppen af siden kan du altid navigere hen på den side, du leder efter,
                            med det samme. For at komme tilbage til forsiden kan man enten trykke på "Forside" i
                            navigationen, eller logoet i øverste venstre hjørne.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="white" class="text-left">Tilføj billeder til fotobogen</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            For at starte din fotobog skal du først gå ind på siden <router-link to="/upload">tilføj billeder</router-link>.<br/><br/>
                            Her kan du enten vælge at trykke på knappen "Gennemse", hvor du herefter kan vælge dine billedfiler fra computeren,
                            eller du kan trække dine filer direkte fra stifinderen og slippe dem ovenpå feltet. <br/><br/>
                            Kun billedfiler er tilladt (f.eks. PNG eller JPG), og siden vil fortælle dig hvis du har givet et forkert filformat. <br/><br/>
                            Herefter trykker du på "Start upload", og dine billeder vil blive uploadet til siden. <br/><br/>
                            Du kan også trykke "Nulstil filer" hvis du har valgt en ugyldig fil, eller bare fortryder dine valgte billeder. <br/><br/>
                            Efter overførslen er færdig vil dine filer på skærmen være tjekket af, og du kan gå hen til din fotobog gennem knappen
                            nedenunder, "Se fotobog", hvor billederne vil være indsat.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="white" class="text-left">Rediger et billede</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            Når du har tilføjet nogle billeder til <router-link to="/gallery">din fotobog</router-link>, kan du gå ind og redigere dem.<br/><br/>
                            For at gøre dette skal du trykke på knappen "Redigering" øverst til højre, ved siden af temaerne. Du vil nu se forskellige
                            knapper dukke op under alle dine billeder. <br/><br/>
                            Du kan direkte redigere billedets titel hvis du trykker på titlen, og hvis du herefter trykker på "Gem", så bliver dette til
                            billedets nye titel. Du kan også slette et billede hvis det ikke skal være i fotobogen længere. <br/><br/>
                            Den sidste mulighed, "Rediger", vil bringe dig videre til en ny side, hvor der er masser af forskellige muligheder
                            ude i venstre side for at tilføje tekst, rotere billedet, bruge filtre osv. Du kan også ændre billedets titel inde på denne side.<br/><br/>
                            For at gemme dine ændringer skal du huske at trykke på "Gem billede" i bunden af denne side. Hvis du derimod trykker på "Annuller"
                            eller navigerer væk fra siden, så gemmes dine ændringer ikke.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 variant="white" class="text-left">Visning af billeder i fuld skærm</b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            Du kan vælge at se alle dine billeder i <router-link to="/gallery">fotobogen</router-link> i fuld skærm. For at gøre dette skal du
                            blot trykke på et billede, og så vil det åbne på siden. <br/><br/> Du kan trykke på "X" oppe i højre hjørne for at komme tilbage
                            til den reelle fotobog. <br/><br/>
                            Hvis du har mere end ét billede i fotobogen, så vil der være pile til venstre og højre side af skærmen, og ved tryk af disse
                            kan du se de andre billeder i fotobogen også, i den rækkefølge de er indsat i.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="white" class="text-left">Skift fotobogens tema</b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            Til at starte med vil billederne i <router-link to="/gallery">fotobogen</router-link> have almindelige, sorte titler, og
                            hvide baggrunde. Hvis du vil ændre på dette, så findes der forskellige temaer du kan afprøve. <br/><br/>
                            Klik knappen "Vælg tema" oppe i højre hjørne af fotobogen, og du vil se de forskellige muligheder. Vælger du f.eks. "Rejsebog",
                            så vil billedernes baggrund skifte til orange, og titlerne til lilla.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 variant="white" class="text-left">Gem eller åbn din fotobog</b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            Da fotobogen ikke gemmes automatisk når du forlader siden, så har du muligheden for at gemme den og åbne den igen senere.
                            Hvis du går ind på <router-link to="/save">gem/åbn</router-link>, så vil der være to muligheder: importer eller eksporter. <br/><br/>
                            Hvis du vil gemme din fotobog, så skal du trykke på knappen "Eksporter JSON" til højre, og du vil få en JSON fil på din
                            computer med den gemte fotobog. <br/><br/> For at åbne denne igen skal du blot trykke på "Gennemse" under importering til venstre, og
                            vælge den i din stifinder - eller blot trække og slippe den i feltet. Du vil så automatisk blive navigeret hen til den åbnede
                            fotobog, som forbliver på siden indtil du forlader den.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Help"
    }
</script>

<style scoped>

</style>
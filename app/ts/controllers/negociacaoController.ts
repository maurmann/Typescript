class NegociacaoController {

    // Element é um campo html no js
    // HtmlInputElement sao input do html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    // Tipo Event sao eventos do js
    adiciona(event: Event) {
        // para que o formulario nao recarregue a pagina
        event.preventDefault();

        // indica para substituir todos '-' por ','. a data é recebida no formato yyyy-mm-dd mas o construtor do date espera 'yyyy,mm,dd'
        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ',')),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        console.log(negociacao.volume);
    }
}
import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.scss']
})
export class ListarGastosComponent {
    @ViewChild('tb') tb: Table | undefined;

    gastosSelecionados = [];

    dataInicial = new Date(2023, 8, 1,);
    dataFinal = new Date(2023, 8, 30,);

    gastoList:any;

    // statuses = [{ label: 'Unqualified', value: 'unqualified' },
    // { label: 'Flash', value: 'flash' },
    // { label: 'New', value: 'new' },
    // { label: 'Negotiation', value: 'negotiation' },
    // { label: 'Renewal', value: 'renewal' },
    // { label: 'Proposal', value: 'proposal' }]

    constructor() { }

    ngOnInit() {
        this.gastoList =  [
            {
                data: new Date(Date.UTC(2023, 8, 3, 15, 15, 7)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: "BK",
                valor:28.50,
                tipoGasto:["Lanche", "Flash"]
            },
            {
                data: new Date(Date.UTC(2023, 8, 3, 17, 0, 7)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: "Americanas",
                valor:30,
                tipoGasto:["Santander", "Débito"]
            },
            {
                data: new Date(Date.UTC(2023, 8, 3, 18, 10, 57)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: " - ",
                valor:24.89,
                tipoGasto:["Débito"]
            },
            {
                data: new Date(Date.UTC(2023, 8, 2, 16, 0, 0)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: "Tarandella",
                valor:75,
                tipoGasto:["Flash"]
            },
            {
                data: new Date(Date.UTC(2023, 8, 26, 14, 15, 0)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: "Cinema",
                valor:38,
                tipoGasto:["Débito", "Junto"]
            },
            {
                data: new Date(Date.UTC(2023, 8, 26, 14, 15, 0)).toLocaleString('pt-BR', { timeZone: 'UTC' }),
                descricao: "Lanche - zeny",
                valor:55,
                tipoGasto:["Lanche", "Débito", "Junto"]
            }
        ];
    }

    applyFilterGlobal($event: any, stringVal: any) {
        this.tb!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    }

    // getSeverity(status: string):any {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'flash';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warning';

    //         case 'renewal':
    //             return "";
    //     }
    // }
}

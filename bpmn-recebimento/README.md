# Recebimento fiscal de material de consumo (BPMN)

Processo da indústria farmacêutica que executei, mapeado em BPMN 2.0 no Bizagi (situação atual).

## Objetivo do processo
Receber a nota fiscal do fornecedor, validar contra o pedido de compra e liberar o recebimento físico e o lançamento do estoque e da fatura.

## Como o processo funciona
1. Nota fiscal recebida: analisar o pedido de compra (SAP) e consultar o monitor de entradas.
2. Classificar o tipo de processo (material de consumo, embalagem ou outro).
3. Relacionar os itens da nota com os do pedido e validar a nota no sistema.
4. Se houver pendência, tratá-la. Se não for solucionada, a nota é recusada.
5. Sem pendência: registrar a entrada na portaria, gerar o romaneio e cadastrar o recebimento fiscal.
6. Liberar a entrada do caminhão. A Logística faz a conferência física.
7. Se a conferência encontrar divergência, a nota é recusada. Se não, lança-se a conferência no sistema e assina-se o romaneio.
8. Recolher o romaneio assinado, assinar o canhoto, liberar o motorista, lançar a entrada das mercadorias no estoque e registrar a fatura.

## Minha participação
Executei todas as etapas, exceto a conferência física.

## Conceitos usados
Decisão e junção (gateways exclusivos), raias por área responsável, eventos de início e fim com nome de resultado.

## Próximos passos
Proposta de melhoria (situação futura) e indicadores: tempo de liberação e taxa de recusa.

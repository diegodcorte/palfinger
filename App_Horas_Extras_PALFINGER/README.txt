PALFINGER - Aplicativo de Horas Extras

COMO USAR
1. Descompacte o ZIP.
2. Abra index.html para testar localmente.
3. Para hospedar, publique index.html, styles.css, app.js e palfinger_logo.svg mantendo os três arquivos na mesma pasta.

SHAREPOINT
O pacote é um site estático (HTML/CSS/JavaScript). Em ambientes onde o SharePoint bloqueia/baixa arquivos .html em vez de executá-los, use uma opção de hospedagem web aprovada pela TI ou empacote a interface como SPFx antes da publicação. As políticas variam por tenant.

LÓGICA REPRODUZIDA DA PLANILHA
- Salário-hora = salário mensal / 200
- HE 50% = (horas seg-sex x salário-hora x 1,5) + DSR: resultado / 20 x 10
- HE 100% = (horas DSR x salário-hora x 2) + DSR: resultado / 20 x 10
- Custo direto = HE 50% + HE 100%
- Média 13º = custo direto / 12
- Média férias = (custo direto / 12) x 1,33
- Total reflexos = média 13º + média férias

Observação: a planilha registra limitadores de 22h/60h, mas não contém fórmula para redistribuir automaticamente as horas por faixas. Por isso o aplicativo preserva as fórmulas efetivamente existentes e mostra os limitadores como aviso operacional.

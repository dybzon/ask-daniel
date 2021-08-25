using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AskDanielCore.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AskedByIpAddress = table.Column<byte[]>(maxLength: 16, nullable: true),
                    Value = table.Column<string>(maxLength: 250, nullable: false),
                    IsAuto = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Responses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Responses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Keywords",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResponseId = table.Column<int>(nullable: false),
                    Value = table.Column<string>(maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Keywords", x => new { x.ResponseId, x.Id });
                    table.ForeignKey(
                        name: "FK_Keywords_Responses_ResponseId",
                        column: x => x.ResponseId,
                        principalTable: "Responses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ResponseParts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ResponseId = table.Column<int>(nullable: false),
                    Value = table.Column<string>(maxLength: 250, nullable: true),
                    Type = table.Column<string>(maxLength: 10, nullable: true),
                    Src = table.Column<string>(maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResponseParts", x => new { x.ResponseId, x.Id });
                    table.ForeignKey(
                        name: "FK_ResponseParts_Responses_ResponseId",
                        column: x => x.ResponseId,
                        principalTable: "Responses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "Id", "AskedByIpAddress", "IsAuto", "Value" },
                values: new object[,]
                {
                    { 1, new byte[] { 212, 237, 135, 57 }, true, "Har du hørt om Rasmus Dybkjær!?" },
                    { 2, new byte[] { 212, 237, 135, 57 }, true, "Er du god til at flyve med svævefly?" },
                    { 3, new byte[] { 212, 237, 135, 57 }, true, "Arbejder du meget med data?" },
                    { 4, new byte[] { 212, 237, 135, 57 }, true, "Parkerer du nogensinde ulovligt?" },
                    { 5, new byte[] { 212, 237, 135, 57 }, false, "Er der en DAX-parser i TabularEditor3?" },
                    { 6, new byte[] { 212, 237, 135, 57 }, false, "Bliver TabularEditor2 stadig vedligeholdt?" },
                    { 7, new byte[] { 212, 237, 135, 57 }, false, "Findes der en gratis version af TabularEditor3?" },
                    { 8, new byte[] { 212, 237, 135, 57 }, false, "Jeg er Microsoft MVP. Hvordan får jeg en gratis licens til TabularEditor3?" }
                });

            migrationBuilder.InsertData(
                table: "Responses",
                column: "Id",
                values: new object[]
                {
                    1,
                    2,
                    3,
                    4
                });

            migrationBuilder.InsertData(
                table: "Keywords",
                columns: new[] { "ResponseId", "Id", "Value" },
                values: new object[,]
                {
                    { 1, 1, "smuk" },
                    { 4, 18, "ulovligt" },
                    { 4, 17, "parkerer" },
                    { 4, 16, "parkere" },
                    { 4, 15, "parkeringsplads" },
                    { 4, 14, "qpark" },
                    { 4, 13, "parkering" },
                    { 3, 12, "gud" },
                    { 3, 10, "data" },
                    { 3, 11, "datagud" },
                    { 2, 8, "svævefly" },
                    { 2, 7, "svæve" },
                    { 2, 6, "flyve" },
                    { 1, 5, "kompetent" },
                    { 1, 4, "dybkjær" },
                    { 1, 3, "rasmus" },
                    { 1, 2, "flot" },
                    { 2, 9, "rejse" }
                });

            migrationBuilder.InsertData(
                table: "ResponseParts",
                columns: new[] { "ResponseId", "Id", "Src", "Type", "Value" },
                values: new object[,]
                {
                    { 2, 2, null, "String", "Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk." },
                    { 4, 6, "https://www.q-park.dk/da/kontakt-os/", "Link", "QPark" },
                    { 3, 3, null, "String", "Jeg er helt tosset med data. Jeg er faktisk en " },
                    { 3, 4, "https://www.kratosbi.com/data-god-daniel-otykier", "Link", "datagud 😎👴🙌" },
                    { 1, 1, null, "String", "Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg \"wow!\". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!" },
                    { 4, 5, null, "String", "Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til " },
                    { 4, 7, null, "String", " så der kommer orden i sagerne" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Keywords");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropTable(
                name: "ResponseParts");

            migrationBuilder.DropTable(
                name: "Responses");
        }
    }
}

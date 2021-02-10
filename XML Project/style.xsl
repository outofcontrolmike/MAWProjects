<?xml version="1.0" encoding="UTF-8"?>
<!--The point of xsl is to style xml elements and attributes-->
<!--Need to incorporate xml version> -->

<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">  <!-- Applies to the top element of an xml doc-->

<!--Create a place for the xml to go into -->

<table  border='1'  width="65%" height="65%">
    <tr bgcolor="beige">
        <th style="letter-spacing: 3px; padding-bottom:2px;">Character Name</th>
        <th style="text-allgn:left">Personallity</th>
        <th style="text-allgn:left">Weapon</th>
        <th>Special</th>
        <th style="text-allgn:left">Gender</th>
        <th>Game Origin</th>
    </tr>
    <!--For each Chracter record in Characters -->
    <xsl:for-each select="characters/character">
    <xsl:sort select="name"/>
    <tr bgcolor="lightblue">
    <!--Grab the value of each character property -->
        <td><xsl:value-of select ="name"/></td>
        <td><xsl:value-of select ="personallity" /></td>
        <td><xsl:value-of select = "weapon"/></td>
        <td><xsl:value-of select = "special"/></td>
        <td bgcolor="whitesmoke"><xsl:value-of select = "gender"/></td>
        <td><xsl:value-of select = "game"/></td>
        
    </tr>
    </xsl:for-each> <!--End for each -->

</table>
</xsl:template> <!--End Template -->

</xsl:stylesheet> <!--End Stylesheet -->




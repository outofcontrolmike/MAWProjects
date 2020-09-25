namespace Final_Project
{
    partial class CatchForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;
        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }
        #region Windows Form Designer generated code
        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lblMessage = new System.Windows.Forms.Label();
            this.lstBxCatch = new System.Windows.Forms.ListBox();
            this.button1 = new System.Windows.Forms.Button();
            this.btnClear = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.lblOzs = new System.Windows.Forms.Label();
            this.lblPounds = new System.Windows.Forms.Label();
            this.cmboBxTypes = new System.Windows.Forms.ComboBox();
            this.TxtBxOzs = new System.Windows.Forms.TextBox();
            this.txtBxLocation = new System.Windows.Forms.TextBox();
            this.txtBxLbs = new System.Windows.Forms.TextBox();
            this.txtBxName = new System.Windows.Forms.TextBox();
            this.lblLocation = new System.Windows.Forms.Label();
            this.lblFishy = new System.Windows.Forms.Label();
            this.lblcmboBx = new System.Windows.Forms.Label();
            this.lblName = new System.Windows.Forms.Label();
            this.btnOkay = new System.Windows.Forms.Button();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuOpen = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuSave = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuSaveAs = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuExit = new System.Windows.Forms.ToolStripMenuItem();
            this.editToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuAddNew = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuUpdate = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuDelete = new System.Windows.Forms.ToolStripMenuItem();
            this.helpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuAbout = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStrip1 = new System.Windows.Forms.ToolStrip();
            this.toolOpen = new System.Windows.Forms.ToolStripButton();
            this.ToolSave = new System.Windows.Forms.ToolStripButton();
            this.toolAdd = new System.Windows.Forms.ToolStripButton();
            this.toolUpdate = new System.Windows.Forms.ToolStripButton();
            this.toolDelete = new System.Windows.Forms.ToolStripButton();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.saveFileDialog1 = new System.Windows.Forms.SaveFileDialog();
            this.groupBox1.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            this.toolStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblMessage
            // 
            this.lblMessage.AutoSize = true;
            this.lblMessage.BackColor = System.Drawing.Color.DarkKhaki;
            this.lblMessage.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMessage.Location = new System.Drawing.Point(12, 433);
            this.lblMessage.Name = "lblMessage";
            this.lblMessage.Size = new System.Drawing.Size(257, 24);
            this.lblMessage.TabIndex = 0;
            this.lblMessage.Text = "Welcome to Catch of the Day!";
            // 
            // lstBxCatch
            // 
            this.lstBxCatch.BackColor = System.Drawing.Color.OldLace;
            this.lstBxCatch.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lstBxCatch.FormattingEnabled = true;
            this.lstBxCatch.ItemHeight = 24;
            this.lstBxCatch.Location = new System.Drawing.Point(12, 79);
            this.lstBxCatch.Name = "lstBxCatch";
            this.lstBxCatch.Size = new System.Drawing.Size(463, 316);
            this.lstBxCatch.TabIndex = 1;
            this.lstBxCatch.SelectedIndexChanged += new System.EventHandler(this.LstBxCatch_SelectedIndexChanged_1);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.FloralWhite;
            this.button1.Location = new System.Drawing.Point(298, 52);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(82, 23);
            this.button1.TabIndex = 2;
            this.button1.Text = "Add New";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.Button1_Click);
            // 
            // btnClear
            // 
            this.btnClear.BackColor = System.Drawing.Color.OldLace;
            this.btnClear.Location = new System.Drawing.Point(392, 52);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(83, 23);
            this.btnClear.TabIndex = 3;
            this.btnClear.Text = "Delete Catch";
            this.btnClear.UseVisualStyleBackColor = false;
            this.btnClear.Click += new System.EventHandler(this.BtnClear_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.lblOzs);
            this.groupBox1.Controls.Add(this.lblPounds);
            this.groupBox1.Controls.Add(this.cmboBxTypes);
            this.groupBox1.Controls.Add(this.TxtBxOzs);
            this.groupBox1.Controls.Add(this.txtBxLocation);
            this.groupBox1.Controls.Add(this.txtBxLbs);
            this.groupBox1.Controls.Add(this.txtBxName);
            this.groupBox1.Controls.Add(this.lblLocation);
            this.groupBox1.Controls.Add(this.lblFishy);
            this.groupBox1.Controls.Add(this.lblcmboBx);
            this.groupBox1.Controls.Add(this.lblName);
            this.groupBox1.Location = new System.Drawing.Point(562, 79);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(366, 254);
            this.groupBox1.TabIndex = 4;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Catch Details";
            // 
            // lblOzs
            // 
            this.lblOzs.AutoSize = true;
            this.lblOzs.Location = new System.Drawing.Point(307, 121);
            this.lblOzs.Name = "lblOzs";
            this.lblOzs.Size = new System.Drawing.Size(20, 13);
            this.lblOzs.TabIndex = 10;
            this.lblOzs.Text = "Oz";
            // 
            // lblPounds
            // 
            this.lblPounds.AutoSize = true;
            this.lblPounds.Location = new System.Drawing.Point(217, 121);
            this.lblPounds.Name = "lblPounds";
            this.lblPounds.Size = new System.Drawing.Size(24, 13);
            this.lblPounds.TabIndex = 9;
            this.lblPounds.Text = "Lbs";
            // 
            // cmboBxTypes
            // 
            this.cmboBxTypes.BackColor = System.Drawing.Color.White;
            this.cmboBxTypes.Cursor = System.Windows.Forms.Cursors.Hand;
            this.cmboBxTypes.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmboBxTypes.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cmboBxTypes.FormattingEnabled = true;
            this.cmboBxTypes.Items.AddRange(new object[] {
            "Grouper",
            "RainbowTrout",
            "BlueGill",
            "Snook",
            "Tarpon"});
            this.cmboBxTypes.Location = new System.Drawing.Point(167, 73);
            this.cmboBxTypes.Name = "cmboBxTypes";
            this.cmboBxTypes.Size = new System.Drawing.Size(171, 29);
            this.cmboBxTypes.TabIndex = 8;
            // 
            // TxtBxOzs
            // 
            this.TxtBxOzs.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TxtBxOzs.Location = new System.Drawing.Point(259, 111);
            this.TxtBxOzs.MaxLength = 2;
            this.TxtBxOzs.Name = "TxtBxOzs";
            this.TxtBxOzs.Size = new System.Drawing.Size(42, 30);
            this.TxtBxOzs.TabIndex = 7;
            this.TxtBxOzs.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.WeightKeyPress);
            // 
            // txtBxLocation
            // 
            this.txtBxLocation.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBxLocation.Location = new System.Drawing.Point(167, 147);
            this.txtBxLocation.MaxLength = 16;
            this.txtBxLocation.Name = "txtBxLocation";
            this.txtBxLocation.Size = new System.Drawing.Size(171, 30);
            this.txtBxLocation.TabIndex = 6;
            // 
            // txtBxLbs
            // 
            this.txtBxLbs.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBxLbs.Location = new System.Drawing.Point(167, 110);
            this.txtBxLbs.MaxLength = 2;
            this.txtBxLbs.Name = "txtBxLbs";
            this.txtBxLbs.Size = new System.Drawing.Size(42, 30);
            this.txtBxLbs.TabIndex = 5;
            this.txtBxLbs.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.WeightKeyPress);
            // 
            // txtBxName
            // 
            this.txtBxName.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBxName.Location = new System.Drawing.Point(167, 32);
            this.txtBxName.MaxLength = 16;
            this.txtBxName.Name = "txtBxName";
            this.txtBxName.Size = new System.Drawing.Size(171, 30);
            this.txtBxName.TabIndex = 4;
            // 
            // lblLocation
            // 
            this.lblLocation.AutoSize = true;
            this.lblLocation.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLocation.Location = new System.Drawing.Point(13, 149);
            this.lblLocation.Name = "lblLocation";
            this.lblLocation.Size = new System.Drawing.Size(85, 21);
            this.lblLocation.TabIndex = 3;
            this.lblLocation.Text = "Location";
            // 
            // lblFishy
            // 
            this.lblFishy.AutoSize = true;
            this.lblFishy.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblFishy.Location = new System.Drawing.Point(13, 110);
            this.lblFishy.Name = "lblFishy";
            this.lblFishy.Size = new System.Drawing.Size(142, 21);
            this.lblFishy.TabIndex = 2;
            this.lblFishy.Text = "Weight Of Fish";
            // 
            // lblcmboBx
            // 
            this.lblcmboBx.AutoSize = true;
            this.lblcmboBx.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblcmboBx.Location = new System.Drawing.Point(13, 71);
            this.lblcmboBx.Name = "lblcmboBx";
            this.lblcmboBx.Size = new System.Drawing.Size(118, 21);
            this.lblcmboBx.TabIndex = 1;
            this.lblcmboBx.Text = "Type of Fish";
            // 
            // lblName
            // 
            this.lblName.AutoSize = true;
            this.lblName.Font = new System.Drawing.Font("Rockwell", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblName.Location = new System.Drawing.Point(13, 32);
            this.lblName.Name = "lblName";
            this.lblName.Size = new System.Drawing.Size(158, 21);
            this.lblName.TabIndex = 0;
            this.lblName.Text = "Fisherman Name";
            // 
            // btnOkay
            // 
            this.btnOkay.BackColor = System.Drawing.Color.OldLace;
            this.btnOkay.Location = new System.Drawing.Point(684, 388);
            this.btnOkay.Name = "btnOkay";
            this.btnOkay.Size = new System.Drawing.Size(119, 41);
            this.btnOkay.TabIndex = 5;
            this.btnOkay.Text = "Submit";
            this.btnOkay.UseVisualStyleBackColor = false;
            this.btnOkay.Click += new System.EventHandler(this.BtnOkay_Click);
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.editToolStripMenuItem,
            this.helpToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(965, 24);
            this.menuStrip1.TabIndex = 6;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuOpen,
            this.mnuSave,
            this.mnuSaveAs,
            this.mnuExit});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.fileToolStripMenuItem.Text = "&File";
            // 
            // mnuOpen
            // 
            this.mnuOpen.Name = "mnuOpen";
            this.mnuOpen.Size = new System.Drawing.Size(111, 22);
            this.mnuOpen.Text = "&Open";
            this.mnuOpen.Click += new System.EventHandler(this.FileOpen);
            // 
            // mnuSave
            // 
            this.mnuSave.Name = "mnuSave";
            this.mnuSave.Size = new System.Drawing.Size(111, 22);
            this.mnuSave.Text = "&Save";
            this.mnuSave.Click += new System.EventHandler(this.FileSave);
            // 
            // mnuSaveAs
            // 
            this.mnuSaveAs.Name = "mnuSaveAs";
            this.mnuSaveAs.Size = new System.Drawing.Size(111, 22);
            this.mnuSaveAs.Text = "&SaveAs";
            this.mnuSaveAs.Click += new System.EventHandler(this.FileSaveAs);
            // 
            // mnuExit
            // 
            this.mnuExit.Name = "mnuExit";
            this.mnuExit.Size = new System.Drawing.Size(111, 22);
            this.mnuExit.Text = "Exit";
            this.mnuExit.Click += new System.EventHandler(this.ExitApp);
            // 
            // editToolStripMenuItem
            // 
            this.editToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuAddNew,
            this.mnuUpdate,
            this.mnuDelete});
            this.editToolStripMenuItem.Name = "editToolStripMenuItem";
            this.editToolStripMenuItem.Size = new System.Drawing.Size(39, 20);
            this.editToolStripMenuItem.Text = "Edit";
            // 
            // mnuAddNew
            // 
            this.mnuAddNew.Name = "mnuAddNew";
            this.mnuAddNew.Size = new System.Drawing.Size(120, 22);
            this.mnuAddNew.Text = "&AddNew";
            this.mnuAddNew.Click += new System.EventHandler(this.AddNew);
            // 
            // mnuUpdate
            // 
            this.mnuUpdate.Name = "mnuUpdate";
            this.mnuUpdate.Size = new System.Drawing.Size(120, 22);
            this.mnuUpdate.Text = "&Update";
            this.mnuUpdate.Click += new System.EventHandler(this.Update);
            // 
            // mnuDelete
            // 
            this.mnuDelete.Name = "mnuDelete";
            this.mnuDelete.Size = new System.Drawing.Size(120, 22);
            this.mnuDelete.Text = "&Delete";
            this.mnuDelete.Click += new System.EventHandler(this.Delete);
            // 
            // helpToolStripMenuItem
            // 
            this.helpToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuAbout});
            this.helpToolStripMenuItem.Name = "helpToolStripMenuItem";
            this.helpToolStripMenuItem.Size = new System.Drawing.Size(44, 20);
            this.helpToolStripMenuItem.Text = "Help";
            // 
            // mnuAbout
            // 
            this.mnuAbout.Name = "mnuAbout";
            this.mnuAbout.Size = new System.Drawing.Size(107, 22);
            this.mnuAbout.Text = "About";
            this.mnuAbout.Click += new System.EventHandler(this.HelpAbout);
            // 
            // toolStrip1
            // 
            this.toolStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolOpen,
            this.ToolSave,
            this.toolAdd,
            this.toolUpdate,
            this.toolDelete});
            this.toolStrip1.Location = new System.Drawing.Point(0, 24);
            this.toolStrip1.Name = "toolStrip1";
            this.toolStrip1.Size = new System.Drawing.Size(965, 25);
            this.toolStrip1.TabIndex = 7;
            this.toolStrip1.Text = "toolStrip1";
            // 
            // toolOpen
            // 
            this.toolOpen.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolOpen.Image = global::Final_Project.Properties.Resources.OpenFile_16x;
            this.toolOpen.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolOpen.Name = "toolOpen";
            this.toolOpen.Size = new System.Drawing.Size(23, 22);
            this.toolOpen.Text = "Open A File";
            this.toolOpen.Click += new System.EventHandler(this.FileOpen);
            // 
            // ToolSave
            // 
            this.ToolSave.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.ToolSave.Image = global::Final_Project.Properties.Resources.Save_grey_16x_24;
            this.ToolSave.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.ToolSave.Name = "ToolSave";
            this.ToolSave.Size = new System.Drawing.Size(23, 22);
            this.ToolSave.Text = "SaveFile";
            this.ToolSave.Click += new System.EventHandler(this.FileSave);
            // 
            // toolAdd
            // 
            this.toolAdd.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolAdd.Image = global::Final_Project.Properties.Resources.AddFile_inverse_16x_32;
            this.toolAdd.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolAdd.Name = "toolAdd";
            this.toolAdd.Size = new System.Drawing.Size(23, 22);
            this.toolAdd.Text = "Add New Catch";
            this.toolAdd.Click += new System.EventHandler(this.AddNew);
            // 
            // toolUpdate
            // 
            this.toolUpdate.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolUpdate.Image = global::Final_Project.Properties.Resources.UpdateListItem_ActionGray_16x_24;
            this.toolUpdate.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolUpdate.Name = "toolUpdate";
            this.toolUpdate.Size = new System.Drawing.Size(23, 22);
            this.toolUpdate.Text = "Update Catch";
            this.toolUpdate.Click += new System.EventHandler(this.Update);
            // 
            // toolDelete
            // 
            this.toolDelete.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolDelete.Image = global::Final_Project.Properties.Resources.DeleteClause_exp_16x;
            this.toolDelete.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolDelete.Name = "toolDelete";
            this.toolDelete.Size = new System.Drawing.Size(23, 22);
            this.toolDelete.Text = "Delete List Item";
            this.toolDelete.Click += new System.EventHandler(this.Delete);
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            // 
            // CatchForm
            // 
            this.BackColor = System.Drawing.Color.DarkKhaki;
            this.ClientSize = new System.Drawing.Size(965, 473);
            this.Controls.Add(this.toolStrip1);
            this.Controls.Add(this.btnOkay);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btnClear);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.lstBxCatch);
            this.Controls.Add(this.lblMessage);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "CatchForm";
            this.Text = "Catch of the Day";
            this.Load += new System.EventHandler(this.CatchForm_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.toolStrip1.ResumeLayout(false);
            this.toolStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }
        #endregion

        private System.Windows.Forms.Label lblMessage;
        private System.Windows.Forms.ListBox lstBxCatch;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button btnClear;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label lblLocation;
        private System.Windows.Forms.Label lblFishy;
        private System.Windows.Forms.Label lblcmboBx;
        private System.Windows.Forms.Label lblName;
        private System.Windows.Forms.Button btnOkay;
        private System.Windows.Forms.ComboBox cmboBxTypes;
        private System.Windows.Forms.TextBox TxtBxOzs;
        private System.Windows.Forms.TextBox txtBxLocation;
        private System.Windows.Forms.TextBox txtBxLbs;
        private System.Windows.Forms.TextBox txtBxName;
        private System.Windows.Forms.Label lblOzs;
        private System.Windows.Forms.Label lblPounds;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem fileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem editToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem helpToolStripMenuItem;
        private System.Windows.Forms.ToolStrip toolStrip1;
        private System.Windows.Forms.ToolStripButton toolOpen;
        private System.Windows.Forms.ToolStripButton ToolSave;
        private System.Windows.Forms.ToolStripButton toolAdd;
        private System.Windows.Forms.ToolStripButton toolUpdate;
        private System.Windows.Forms.ToolStripButton toolDelete;
        private System.Windows.Forms.ToolStripMenuItem mnuOpen;
        private System.Windows.Forms.ToolStripMenuItem mnuSave;
        private System.Windows.Forms.ToolStripMenuItem mnuSaveAs;
        private System.Windows.Forms.ToolStripMenuItem mnuExit;
        private System.Windows.Forms.ToolStripMenuItem mnuAddNew;
        private System.Windows.Forms.ToolStripMenuItem mnuUpdate;
        private System.Windows.Forms.ToolStripMenuItem mnuDelete;
        private System.Windows.Forms.ToolStripMenuItem mnuAbout;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
        private System.Windows.Forms.SaveFileDialog saveFileDialog1;
    }
}


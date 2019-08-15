namespace AdventureGUI
{
    partial class Form1
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
            this.components = new System.ComponentModel.Container();
            this.lblTitle = new System.Windows.Forms.Label();
            this.lblName = new System.Windows.Forms.Label();
            this.lblRace = new System.Windows.Forms.Label();
            this.lblClass = new System.Windows.Forms.Label();
            this.txtbxName = new System.Windows.Forms.TextBox();
            this.txtArea = new System.Windows.Forms.RichTextBox();
            this.cmboBxRace = new System.Windows.Forms.ComboBox();
            this.backgroundWorker1 = new System.ComponentModel.BackgroundWorker();
            this.backgroundWorker2 = new System.ComponentModel.BackgroundWorker();
            this.btnSubmit = new System.Windows.Forms.Button();
            this.btnReset = new System.Windows.Forms.Button();
            this.cmboBxClass = new System.Windows.Forms.ComboBox();
            this.lblAgeReq = new System.Windows.Forms.Label();
            this.bindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.tbAge = new System.Windows.Forms.TrackBar();
            this.lblAgeSlide = new System.Windows.Forms.Label();
            this.btnView = new System.Windows.Forms.Button();
            this.btnViewSpell = new System.Windows.Forms.Button();
            this.btnNext = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tbAge)).BeginInit();
            this.SuspendLayout();
            // 
            // lblTitle
            // 
            this.lblTitle.AutoSize = true;
            this.lblTitle.Font = new System.Drawing.Font("Viner Hand ITC", 24F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Underline))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitle.Location = new System.Drawing.Point(346, 9);
            this.lblTitle.Name = "lblTitle";
            this.lblTitle.Size = new System.Drawing.Size(285, 52);
            this.lblTitle.TabIndex = 0;
            this.lblTitle.Text = "Character Setup";
            // 
            // lblName
            // 
            this.lblName.AutoSize = true;
            this.lblName.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblName.Location = new System.Drawing.Point(19, 87);
            this.lblName.Name = "lblName";
            this.lblName.Size = new System.Drawing.Size(66, 31);
            this.lblName.TabIndex = 1;
            this.lblName.Text = "Name";
            // 
            // lblRace
            // 
            this.lblRace.AutoSize = true;
            this.lblRace.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblRace.Location = new System.Drawing.Point(304, 92);
            this.lblRace.Name = "lblRace";
            this.lblRace.Size = new System.Drawing.Size(55, 31);
            this.lblRace.TabIndex = 2;
            this.lblRace.Text = "Race\r\n";
            // 
            // lblClass
            // 
            this.lblClass.AutoSize = true;
            this.lblClass.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblClass.Location = new System.Drawing.Point(300, 233);
            this.lblClass.Name = "lblClass";
            this.lblClass.Size = new System.Drawing.Size(59, 31);
            this.lblClass.TabIndex = 4;
            this.lblClass.Text = "Class";
            // 
            // txtbxName
            // 
            this.txtbxName.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtbxName.Location = new System.Drawing.Point(99, 92);
            this.txtbxName.MaxLength = 14;
            this.txtbxName.Name = "txtbxName";
            this.txtbxName.Size = new System.Drawing.Size(167, 26);
            this.txtbxName.TabIndex = 5;
            this.txtbxName.TextChanged += new System.EventHandler(this.TextBox1_TextChanged);
            // 
            // txtArea
            // 
            this.txtArea.BackColor = System.Drawing.Color.Snow;
            this.txtArea.Cursor = System.Windows.Forms.Cursors.Hand;
            this.txtArea.Font = new System.Drawing.Font("Book Antiqua", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtArea.ForeColor = System.Drawing.Color.Black;
            this.txtArea.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.txtArea.Location = new System.Drawing.Point(582, 87);
            this.txtArea.Name = "txtArea";
            this.txtArea.ReadOnly = true;
            this.txtArea.Size = new System.Drawing.Size(356, 322);
            this.txtArea.TabIndex = 7;
            this.txtArea.Text = "This is an interaction TextArea.  Certain parts of the form will display here dep" +
    "ending on your set up.";
            // 
            // cmboBxRace
            // 
            this.cmboBxRace.Cursor = System.Windows.Forms.Cursors.Hand;
            this.cmboBxRace.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmboBxRace.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cmboBxRace.FormattingEnabled = true;
            this.cmboBxRace.Items.AddRange(new object[] {
            "Human",
            "Elf",
            "Dwarf",
            "Hobbit"});
            this.cmboBxRace.Location = new System.Drawing.Point(365, 92);
            this.cmboBxRace.Name = "cmboBxRace";
            this.cmboBxRace.Size = new System.Drawing.Size(162, 28);
            this.cmboBxRace.TabIndex = 8;
            this.cmboBxRace.SelectedIndexChanged += new System.EventHandler(this.ComboBox1_SelectedIndexChanged);
            // 
            // btnSubmit
            // 
            this.btnSubmit.FlatAppearance.BorderColor = System.Drawing.Color.Black;
            this.btnSubmit.FlatAppearance.BorderSize = 10;
            this.btnSubmit.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btnSubmit.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSubmit.Location = new System.Drawing.Point(422, 428);
            this.btnSubmit.Name = "btnSubmit";
            this.btnSubmit.Size = new System.Drawing.Size(113, 71);
            this.btnSubmit.TabIndex = 11;
            this.btnSubmit.Text = "View Stats";
            this.btnSubmit.UseVisualStyleBackColor = true;
            this.btnSubmit.Click += new System.EventHandler(this.Button1_Click);
            // 
            // btnReset
            // 
            this.btnReset.FlatAppearance.BorderColor = System.Drawing.Color.Black;
            this.btnReset.FlatAppearance.BorderSize = 10;
            this.btnReset.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btnReset.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnReset.Location = new System.Drawing.Point(227, 428);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(120, 71);
            this.btnReset.TabIndex = 12;
            this.btnReset.Text = "Reset ";
            this.btnReset.UseVisualStyleBackColor = true;
            this.btnReset.Click += new System.EventHandler(this.BtnReset_Click);
            // 
            // cmboBxClass
            // 
            this.cmboBxClass.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmboBxClass.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cmboBxClass.FormattingEnabled = true;
            this.cmboBxClass.Items.AddRange(new object[] {
            "Warrior",
            "Mage",
            "Theif",
            "Cleric"});
            this.cmboBxClass.Location = new System.Drawing.Point(365, 233);
            this.cmboBxClass.Name = "cmboBxClass";
            this.cmboBxClass.Size = new System.Drawing.Size(162, 28);
            this.cmboBxClass.TabIndex = 10;
            this.cmboBxClass.SelectedIndexChanged += new System.EventHandler(this.CmboBxClass_SelectedIndexChanged);
            // 
            // lblAgeReq
            // 
            this.lblAgeReq.AutoSize = true;
            this.lblAgeReq.Font = new System.Drawing.Font("Viner Hand ITC", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAgeReq.Location = new System.Drawing.Point(16, 233);
            this.lblAgeReq.Name = "lblAgeReq";
            this.lblAgeReq.Size = new System.Drawing.Size(88, 26);
            this.lblAgeReq.TabIndex = 13;
            this.lblAgeReq.Text = "Age Limit";
            // 
            // tbAge
            // 
            this.tbAge.Location = new System.Drawing.Point(123, 233);
            this.tbAge.Maximum = 100;
            this.tbAge.Minimum = 10;
            this.tbAge.Name = "tbAge";
            this.tbAge.Size = new System.Drawing.Size(143, 45);
            this.tbAge.TabIndex = 15;
            this.tbAge.Value = 10;
            this.tbAge.Scroll += new System.EventHandler(this.TbAge_Scroll);
            // 
            // lblAgeSlide
            // 
            this.lblAgeSlide.AutoSize = true;
            this.lblAgeSlide.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAgeSlide.Location = new System.Drawing.Point(152, 272);
            this.lblAgeSlide.Name = "lblAgeSlide";
            this.lblAgeSlide.Size = new System.Drawing.Size(67, 31);
            this.lblAgeSlide.TabIndex = 16;
            this.lblAgeSlide.Text = "Value";
            // 
            // btnView
            // 
            this.btnView.FlatAppearance.BorderColor = System.Drawing.Color.Black;
            this.btnView.FlatAppearance.BorderSize = 10;
            this.btnView.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btnView.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnView.Location = new System.Drawing.Point(638, 428);
            this.btnView.Name = "btnView";
            this.btnView.Size = new System.Drawing.Size(110, 71);
            this.btnView.TabIndex = 17;
            this.btnView.Text = "View Equipment";
            this.btnView.UseVisualStyleBackColor = true;
            this.btnView.Click += new System.EventHandler(this.Button1_Click_1);
            // 
            // btnViewSpell
            // 
            this.btnViewSpell.FlatAppearance.BorderColor = System.Drawing.Color.Black;
            this.btnViewSpell.FlatAppearance.BorderSize = 10;
            this.btnViewSpell.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btnViewSpell.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnViewSpell.Location = new System.Drawing.Point(793, 425);
            this.btnViewSpell.Name = "btnViewSpell";
            this.btnViewSpell.Size = new System.Drawing.Size(105, 71);
            this.btnViewSpell.TabIndex = 19;
            this.btnViewSpell.Text = "View Spells";
            this.btnViewSpell.UseVisualStyleBackColor = true;
            this.btnViewSpell.Visible = false;
            this.btnViewSpell.Click += new System.EventHandler(this.BtnViewSpell_Click);
            // 
            // btnNext
            // 
            this.btnNext.FlatAppearance.BorderColor = System.Drawing.Color.Black;
            this.btnNext.FlatAppearance.BorderSize = 10;
            this.btnNext.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btnNext.Font = new System.Drawing.Font("Viner Hand ITC", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnNext.Location = new System.Drawing.Point(49, 428);
            this.btnNext.Name = "btnNext";
            this.btnNext.Size = new System.Drawing.Size(120, 71);
            this.btnNext.TabIndex = 20;
            this.btnNext.Text = "Continue";
            this.btnNext.UseVisualStyleBackColor = true;
            this.btnNext.Click += new System.EventHandler(this.BtnNext_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.LightSkyBlue;
            this.ClientSize = new System.Drawing.Size(950, 517);
            this.Controls.Add(this.lblAgeSlide);
            this.Controls.Add(this.tbAge);
            this.Controls.Add(this.lblAgeReq);
            this.Controls.Add(this.cmboBxClass);
            this.Controls.Add(this.cmboBxRace);
            this.Controls.Add(this.txtArea);
            this.Controls.Add(this.txtbxName);
            this.Controls.Add(this.lblClass);
            this.Controls.Add(this.lblRace);
            this.Controls.Add(this.lblName);
            this.Controls.Add(this.lblTitle);
            this.Controls.Add(this.btnNext);
            this.Controls.Add(this.btnViewSpell);
            this.Controls.Add(this.btnView);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.btnSubmit);
            this.Name = "Form1";
            this.Text = "Adventure GUI";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tbAge)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblTitle;
        private System.Windows.Forms.Label lblName;
        private System.Windows.Forms.Label lblRace;
        private System.Windows.Forms.Label lblClass;
        private System.Windows.Forms.TextBox txtbxName;
        private System.Windows.Forms.RichTextBox txtArea;
        private System.Windows.Forms.ComboBox cmboBxRace;
        private System.ComponentModel.BackgroundWorker backgroundWorker1;
        private System.ComponentModel.BackgroundWorker backgroundWorker2;
        private System.Windows.Forms.Button btnSubmit;
        private System.Windows.Forms.Button btnReset;
        private System.Windows.Forms.ComboBox cmboBxClass;
        private System.Windows.Forms.Label lblAgeReq;
        private System.Windows.Forms.BindingSource bindingSource1;
        private System.Windows.Forms.TrackBar tbAge;
        private System.Windows.Forms.Label lblAgeSlide;
        private System.Windows.Forms.Button btnView;
        private System.Windows.Forms.Button btnViewSpell;
        private System.Windows.Forms.Button btnNext;
    }
}

